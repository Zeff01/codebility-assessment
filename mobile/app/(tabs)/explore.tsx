import { StyleSheet, ScrollView, View, TouchableOpacity, Image } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useCart } from '@/contexts/CartContext';

export default function CartScreen() {
  const { cartItems, cartCount, removeFromCart, clearCart } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <ThemedView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <ThemedText style={styles.headerTitle}>Shopping Cart</ThemedText>
        <ThemedText style={styles.headerSubtitle}>
          {cartCount} {cartCount === 1 ? 'item' : 'items'}
        </ThemedText>
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {cartItems.length === 0 ? (
          <View style={styles.emptyContainer}>
            <ThemedText style={styles.emptyIcon}>🛒</ThemedText>
            <ThemedText style={styles.emptyTitle}>Your cart is empty</ThemedText>
            <ThemedText style={styles.emptyText}>
              Add products from the Home tab to get started!
            </ThemedText>
          </View>
        ) : (
          <>
            {cartItems.map((item) => (
              <View key={item.id} style={styles.cartItem}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.itemImage}
                  resizeMode="contain"
                />
                <View style={styles.itemInfo}>
                  <ThemedText style={styles.itemTitle} numberOfLines={2}>
                    {item.title}
                  </ThemedText>
                  <ThemedText style={styles.itemPrice}>
                    ${item.price.toFixed(2)} × {item.quantity}
                  </ThemedText>
                  <ThemedText style={styles.itemTotal}>
                    Total: ${(item.price * item.quantity).toFixed(2)}
                  </ThemedText>
                </View>
                <TouchableOpacity
                  style={styles.removeButton}
                  onPress={() => removeFromCart(item.id)}
                >
                  <ThemedText style={styles.removeButtonText}>Remove</ThemedText>
                </TouchableOpacity>
              </View>
            ))}

            {/* Total Section */}
            <View style={styles.totalContainer}>
              <View style={styles.totalRow}>
                <ThemedText style={styles.totalLabel}>Subtotal:</ThemedText>
                <ThemedText style={styles.totalValue}>${totalPrice.toFixed(2)}</ThemedText>
              </View>
              <View style={styles.totalRow}>
                <ThemedText style={styles.totalLabel}>Shipping:</ThemedText>
                <ThemedText style={styles.totalValue}>Free</ThemedText>
              </View>
              <View style={[styles.totalRow, styles.grandTotalRow]}>
                <ThemedText style={styles.grandTotalLabel}>Total:</ThemedText>
                <ThemedText style={styles.grandTotalValue}>
                  ${totalPrice.toFixed(2)}
                </ThemedText>
              </View>
            </View>

            {/* Action Buttons */}
            <View style={styles.actionButtons}>
              <TouchableOpacity style={styles.checkoutButton}>
                <ThemedText style={styles.checkoutButtonText}>
                  Proceed to Checkout
                </ThemedText>
              </TouchableOpacity>
              <TouchableOpacity style={styles.clearButton} onPress={clearCart}>
                <ThemedText style={styles.clearButtonText}>Clear Cart</ThemedText>
              </TouchableOpacity>
            </View>
          </>
        )}
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#6b7280',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 80,
  },
  emptyIcon: {
    fontSize: 80,
    marginBottom: 20,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    alignItems: 'center',
  },
  itemImage: {
    width: 80,
    height: 80,
    marginRight: 12,
  },
  itemInfo: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 13,
    color: '#6b7280',
    marginBottom: 2,
  },
  itemTotal: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3b82f6',
  },
  removeButton: {
    backgroundColor: '#fee2e2',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  removeButtonText: {
    color: '#dc2626',
    fontSize: 12,
    fontWeight: '600',
  },
  totalContainer: {
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    padding: 20,
    marginTop: 12,
    marginBottom: 20,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  totalLabel: {
    fontSize: 16,
    color: '#6b7280',
  },
  totalValue: {
    fontSize: 16,
    fontWeight: '600',
  },
  grandTotalRow: {
    borderTopWidth: 2,
    borderTopColor: '#e5e7eb',
    paddingTop: 12,
    marginTop: 8,
    marginBottom: 0,
  },
  grandTotalLabel: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  grandTotalValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3b82f6',
  },
  actionButtons: {
    gap: 12,
  },
  checkoutButton: {
    backgroundColor: '#3b82f6',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  clearButton: {
    backgroundColor: '#f3f4f6',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  clearButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
