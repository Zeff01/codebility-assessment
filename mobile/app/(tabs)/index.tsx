import { useState, useEffect } from 'react';
import {
  Image,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Animated,
} from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { fetchRandomProduct, Product } from '@/services/api';
import { useCart } from '@/contexts/CartContext';

export default function ProductDetailsScreen() {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart, cartCount } = useCart();
  
  const scaleAnim = new Animated.Value(1);

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchRandomProduct();
      setProduct(data);
    } catch (err) {
      setError('Failed to load product. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      setAddedToCart(true);
      
      // Animate button
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.1,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
      ]).start();

      // Show alert
      Alert.alert(
        'Added to Cart! 🎉',
        `${product.title} has been added to your cart.`,
        [{ text: 'OK', onPress: () => setAddedToCart(false) }]
      );

      // Reset after 2 seconds
      setTimeout(() => setAddedToCart(false), 2000);
    }
  };

  const handleRefresh = () => {
    loadProduct();
  };

  if (loading) {
    return (
      <ThemedView style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#3b82f6" />
        <ThemedText style={styles.loadingText}>Loading product...</ThemedText>
      </ThemedView>
    );
  }

  if (error || !product) {
    return (
      <ThemedView style={styles.centerContainer}>
        <ThemedText style={styles.errorTitle}>⚠️ Oops!</ThemedText>
        <ThemedText style={styles.errorText}>{error}</ThemedText>
        <TouchableOpacity style={styles.retryButton} onPress={handleRefresh}>
          <ThemedText style={styles.retryButtonText}>Retry</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      {/* Cart Counter */}
      <View style={styles.cartBadge}>
        <ThemedText style={styles.cartBadgeText}>🛒 {cartCount}</ThemedText>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Product Image */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: product.image }}
            style={styles.productImage}
            resizeMode="contain"
          />
        </View>

        {/* Product Info */}
        <View style={styles.infoContainer}>
          {/* Category Badge */}
          <View style={styles.categoryBadge}>
            <ThemedText style={styles.categoryText}>
              {product.category.toUpperCase()}
            </ThemedText>
          </View>

          {/* Title */}
          <ThemedText style={styles.title}>{product.title}</ThemedText>

          {/* Rating */}
          <View style={styles.ratingContainer}>
            <ThemedText style={styles.ratingText}>
              ⭐ {product.rating.rate} ({product.rating.count} reviews)
            </ThemedText>
          </View>

          {/* Price */}
          <ThemedText style={styles.price}>${product.price.toFixed(2)}</ThemedText>

          {/* Description */}
          <View style={styles.descriptionContainer}>
            <ThemedText style={styles.descriptionTitle}>Description</ThemedText>
            <ThemedText style={styles.description}>{product.description}</ThemedText>
          </View>

          {/* Action Buttons */}
          <View style={styles.buttonContainer}>
            <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
              <TouchableOpacity
                style={[
                  styles.addToCartButton,
                  addedToCart && styles.addedToCartButton,
                ]}
                onPress={handleAddToCart}
                activeOpacity={0.8}
              >
                <ThemedText style={styles.addToCartButtonText}>
                  {addedToCart ? '✓ Added to Cart' : 'Add to Cart'}
                </ThemedText>
              </TouchableOpacity>
            </Animated.View>

            <TouchableOpacity
              style={styles.refreshButton}
              onPress={handleRefresh}
              activeOpacity={0.7}
            >
              <ThemedText style={styles.refreshButtonText}>
                🔄 Load Another Product
              </ThemedText>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  cartBadge: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: '#3b82f6',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    zIndex: 1000,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cartBadgeText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageContainer: {
    width: '100%',
    height: 400,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    padding: 20,
  },
  categoryBadge: {
    backgroundColor: '#e0e7ff',
    alignSelf: 'flex-start',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginBottom: 12,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#4f46e5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    lineHeight: 32,
  },
  ratingContainer: {
    marginBottom: 12,
  },
  ratingText: {
    fontSize: 14,
    color: '#6b7280',
  },
  price: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#3b82f6',
    marginBottom: 20,
  },
  descriptionContainer: {
    marginBottom: 24,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 15,
    lineHeight: 24,
    color: '#6b7280',
  },
  buttonContainer: {
    gap: 12,
  },
  addToCartButton: {
    backgroundColor: '#3b82f6',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  addedToCartButton: {
    backgroundColor: '#10b981',
  },
  addToCartButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  refreshButton: {
    backgroundColor: '#f3f4f6',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  refreshButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#6b7280',
  },
  errorTitle: {
    fontSize: 48,
    marginBottom: 16,
  },
  errorText: {
    fontSize: 16,
    color: '#ef4444',
    textAlign: 'center',
    marginBottom: 24,
  },
  retryButton: {
    backgroundColor: '#3b82f6',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 12,
  },
  retryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
