import { notFound } from 'next/navigation';
import Link from 'next/link';
import { posts } from 'aelladev/data/posts';

interface PostPageProps {
  params: Promise<{
    id: string;
  }>;
}

// Material Icons as React components
const HomeIcon = () => (
  <span className="blog-logo-icon material-symbols-outlined">home</span>
);

const ArrowBackIcon = () => (
  <span className="back-icon material-symbols-outlined">arrow_back</span>
);

const CopyIcon = () => (
  <span className="copy-icon material-symbols-outlined">content_copy</span>
);

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params;
  
  if (!id || isNaN(Number(id))) {
    notFound();
  }

  const postId = Number(id);
  const post = posts.find(p => p.id === postId);

  if (!post) {
    notFound();
  }

  return (
    <div className="blog-post-container">
      <div className="blog-post-layout">
        <div className="blog-post-content">
          <div className="blog-post-wrapper">
            {/* Header */}
            <header className="blog-post-header">
              <div className="blog-header-left">
                <HomeIcon />
                <h2 className="blog-logo-text">CUTENEXT.DEV</h2>
              </div>
              <div className="blog-header-right">
                <div className="blog-nav">
                  <Link href="/" className="back-link">
                    <ArrowBackIcon />
                    <span>Back to Blog</span>
                  </Link>
                </div>
              </div>
            </header>

            {/* Main Content */}
            <main className="blog-post-main">
              <article className="blog-article">
                <header className="blog-article-header">
                  <h1 className="blog-post-title">{post.title}</h1>
                  <p className="blog-post-meta">
                    Published on {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </header>

                <div className="blog-content">
                  <p>
                    Welcome to my little corner of the internet! Today, I'm super excited to share my recent adventure diving into the latest features of Next.js 15. It's been a whirlwind of discovery, filled with moments of 'aha!' and a few 'oops' along the way. If you're curious about what's new and how you can leverage it for your own cute and playful projects, you're in the right place. Let's get started on this fun journey together!
                  </p>

                  <p>
                    One of the most talked-about updates is the enhanced server components. I was a bit intimidated at first, but the documentation is surprisingly friendly. I started by converting a simple display component, and the performance boost was noticeable right away. The code feels cleaner, and the separation of concerns between client and server logic is much more intuitive now. It really helps in keeping the client-side bundle size small, which is fantastic for performance.
                  </p>

                  {/* Code Block */}
                  <div className="code-block">
                    <div className="code-header">
                      <span>components/Welcome.jsx</span>
                      <button className="copy-button">
                        <CopyIcon />
                        Copy
                      </button>
                    </div>
                    <pre className="code-pre">
                      <code className="code-content">
{`// A cute server component!
async function WelcomeMessage() {
  const response = await fetch('https://api.example.com/greeting');
  const { message } = await response.json();

  return <h1>{message} 🎉</h1>;
}

export default WelcomeMessage;`}
                      </code>
                    </pre>
                  </div>

                  <p>
                    Another feature I fell in love with is the improved image optimization. It's now even easier to handle responsive images without a headache. My blog's cute illustrations load lightning-fast, and the developer experience is just so smooth. Just drop in the <code className="inline-code">&lt;Image /&gt;</code> component, and Next.js handles the rest. It's like magic!
                  </p>

                  <p>
                    Overall, exploring Next.js 15 has been a delightful experience. It empowers developers to build faster, more efficient, and more engaging web applications with a surprisingly gentle learning curve for its new features. I can't wait to see what other cute projects I can build with this powerful framework. Stay tuned for more adventures!
                  </p>
                </div>
              </article>
            </main>

            {/* Footer */}
            <footer className="blog-post-footer">
              <Link href="/" className="footer-back-link">
                <ArrowBackIcon />
                <span>Back to Home</span>
              </Link>
              <p>© My Cute Blog 2025</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}