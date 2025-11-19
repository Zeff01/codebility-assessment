import Link from 'next/link';
import { posts } from 'aelladev/data/posts';
import './globals.css';

// Logo Component
const Logo = () => (
  <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="logo">
    <g clipPath="url(#clip0_6_535)">
      <path 
        clipRule="evenodd" 
        d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" 
        fill="currentColor" 
        fillRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="clip0_6_535">
        <rect fill="white" height="48" width="48"/>
      </clipPath>
    </defs>
  </svg>
);

// Social Icons
const GithubIcon = () => (
  <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.799 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14.01-7.496 14.01-13.986 0-.213 0-.425-.015-.636.961-.689 1.79-1.56 2.455-2.549z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
  </svg>
);

export default function Home() {
  return (
    <div className="page-container">
      <div className="content-wrapper">
        <div className="main-container">
          {/* Header */}
          <header className="header">
            <div className="header-content">
              <Logo />
              <h2 className="site-title">Dev Doodles</h2>
            </div>
            <nav className="nav">
              <Link href="/">Home</Link>
              <Link href="#">About</Link>
              <Link href="#">Contact</Link>
            </nav>
          </header>

          {/* Main Content */}
          <main>
            <section className="hero">
              <h1>Dev Doodles</h1>
              <p>Coding with a sprinkle of fun.</p>
            </section>

            <section>
              <h2 className="section-title">Latest Posts</h2>
              <div className="posts-grid">
                {posts.map((post) => (
                  <div key={post.id} className="post-card">
                    <div 
                      className="post-image" 
                      style={{ 
                        backgroundImage: `url(https://lh3.googleusercontent.com/aida-public/AB6AXuBDWlH70OkfZHDrcMVFEYy1shZXk8nZkixA77lBlIm3Qez07jKfk_BM3SCVeLMxgU-HhLR67NqkDcRfkI8EdzIqWIYEv_tpVpMHyBK2jGqwYyrIfi7-RRlxv_6EDhlPxGNLkns2JM1lhlHBCoecOueLpuwUxwGla9FDpA4K0QUfe8185D1ML4kG5QcHnGC5EIxmAw55JLIKUTYUBmSzs3JbJH0ngKFfbElahXPDpGFSCIF2MwMNIW_VjmPGJBbPvficNAH4RhM_SgLO)`
                      }}
                    />
                    <div className="post-content">
                      <div className="post-info">
                        <p className="post-title">{post.title}</p>
                        <p className="post-excerpt">{post.excerpt}</p>
                        <p className="post-date">
                          {new Date(post.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </p>
                      </div>
                      <Link 
                        href={`/posts/${post.id}`}
                        className="read-more-btn"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <p>© 2025 Dev Doodles. All Rights Reserved.</p>
            <div className="social-links">
              <a href="#" className="social-link">
                <GithubIcon />
              </a>
              <a href="#" className="social-link">
                <TwitterIcon />
              </a>
              <a href="#" className="social-link">
                <LinkedinIcon />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}