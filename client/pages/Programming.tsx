import { getArticlesByCategory } from "../data/articles";

export default function Programming() {
  const articles = getArticlesByCategory("programming");

  return (
    <div
      style={{
        direction: "rtl",
        fontFamily: "system-ui, -apple-system, Arial, sans-serif",
        backgroundColor: "#fafafa",
        color: "#2c3e50",
        margin: 0,
        padding: 0,
        lineHeight: "1.6",
      }}
    >
      {/* Header */}
      <header
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          padding: "25px 15px",
          textAlign: "center",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            margin: "0 0 8px 0",
            fontSize: "32px",
            fontWeight: "800",
            textShadow: "0 2px 4px rgba(0,0,0,0.3)",
          }}
        >
          <a href="/" style={{ color: "white", textDecoration: "none" }}>
            تكنولوجيا 2025
          </a>
        </h1>
        <p
          style={{
            margin: 0,
            fontSize: "16px",
            opacity: "0.9",
            fontWeight: "400",
          }}
        >
          قسم البرمجة والتطوير
        </p>
      </header>

      {/* Navigation */}
      <nav
        style={{
          backgroundColor: "white",
          padding: "15px",
          borderBottom: "2px solid #e2e8f0",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <a
            href="/"
            style={{
              padding: "8px 16px",
              backgroundColor: "#f7fafc",
              color: "#4a5568",
              textDecoration: "none",
              borderRadius: "20px",
              fontSize: "14px",
              border: "1px solid #e2e8f0",
            }}
          >
            🏠 الرئيسية
          </a>
          <a
            href="/programming"
            style={{
              padding: "8px 16px",
              backgroundColor: "#667eea",
              color: "white",
              textDecoration: "none",
              borderRadius: "20px",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            💻 البرمجة
          </a>
          <a
            href="/ai"
            style={{
              padding: "8px 16px",
              backgroundColor: "#f7fafc",
              color: "#4a5568",
              textDecoration: "none",
              borderRadius: "20px",
              fontSize: "14px",
              border: "1px solid #e2e8f0",
            }}
          >
            🤖 الذكاء الاصطناعي
          </a>
          <a
            href="/security"
            style={{
              padding: "8px 16px",
              backgroundColor: "#f7fafc",
              color: "#4a5568",
              textDecoration: "none",
              borderRadius: "20px",
              fontSize: "14px",
              border: "1px solid #e2e8f0",
            }}
          >
            🔐 الأمن السيبراني
          </a>
          <a
            href="/mobile"
            style={{
              padding: "8px 16px",
              backgroundColor: "#f7fafc",
              color: "#4a5568",
              textDecoration: "none",
              borderRadius: "20px",
              fontSize: "14px",
              border: "1px solid #e2e8f0",
            }}
          >
            📱 تطبيقات الهاتف
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "30px 15px",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            fontWeight: "700",
            margin: "0 0 10px 0",
            color: "#1a365d",
            textAlign: "center",
            borderBottom: "3px solid #667eea",
            paddingBottom: "15px",
          }}
        >
          مقالات البرمجة والتطوير
        </h2>

        <p
          style={{
            textAlign: "center",
            fontSize: "16px",
            color: "#4a5568",
            marginBottom: "30px",
          }}
        >
          {articles.length} مقال متاح في هذا القسم
        </p>

        {/* Articles Grid */}
        <div style={{ display: "grid", gap: "20px" }}>
          {articles.map((article, index) => (
            <article
              key={article.id}
              style={{
                backgroundColor: "white",
                padding: "25px",
                borderRadius: "10px",
                boxShadow: "0 2px 15px rgba(0,0,0,0.06)",
                border: "1px solid #e8eaed",
              }}
            >
              <a
                href={`/article/${article.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    margin: "0 0 12px 0",
                    color: "#2d3748",
                    lineHeight: "1.4",
                  }}
                >
                  {article.title}
                </h3>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#718096",
                    marginBottom: "15px",
                    display: "flex",
                    gap: "15px",
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      backgroundColor: "#f0f8ff",
                      padding: "4px 10px",
                      borderRadius: "12px",
                      fontSize: "12px",
                    }}
                  >
                    📅 {new Date(article.date).toLocaleDateString("ar-SA")}
                  </span>
                  <span
                    style={{
                      backgroundColor: "#f0f8ff",
                      padding: "4px 10px",
                      borderRadius: "12px",
                      fontSize: "12px",
                    }}
                  >
                    ⏱️ {article.readTime}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.6",
                    margin: "0 0 15px 0",
                    color: "#4a5568",
                  }}
                >
                  {article.excerpt}
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                      flexWrap: "wrap",
                    }}
                  >
                    {article.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        style={{
                          backgroundColor: "#e6f3ff",
                          color: "#667eea",
                          padding: "4px 8px",
                          borderRadius: "10px",
                          fontSize: "12px",
                          fontWeight: "500",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span
                    style={{
                      color: "#667eea",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    اقرأ المزيد ←
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>

        {/* Load More Section */}
        <div
          style={{
            textAlign: "center",
            marginTop: "40px",
            padding: "30px",
            backgroundColor: "white",
            borderRadius: "12px",
            border: "1px solid #e8eaed",
          }}
        >
          <h3
            style={{
              fontSize: "20px",
              fontWeight: "600",
              margin: "0 0 15px 0",
              color: "#1a365d",
            }}
          >
            المزيد من المقالات قريباً
          </h3>
          <p
            style={{
              fontSize: "16px",
              color: "#4a5568",
              margin: "0 0 20px 0",
            }}
          >
            نعمل باستمرار على إضافة مقالات جديدة ومفيدة في مجال البرمجة والتطوير
          </p>
          <a
            href="/"
            style={{
              backgroundColor: "#667eea",
              color: "white",
              padding: "12px 24px",
              textDecoration: "none",
              borderRadius: "20px",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            تصفح جميع الأقسام
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          background: "linear-gradient(135deg, #2d3748 0%, #4a5568 100%)",
          color: "white",
          marginTop: "60px",
          padding: "30px 15px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            margin: "0 0 15px 0",
            fontSize: "16px",
            fontWeight: "500",
          }}
        >
          © 2025 تكنولوجيا 2025 - أخبار التطوير والتكنولوجيا
        </p>
        <div
          style={{
            fontSize: "14px",
            marginBottom: "15px",
          }}
        >
          <a
            href="/about"
            style={{
              color: "#e2e8f0",
              margin: "0 15px",
              textDecoration: "none",
            }}
          >
            من نحن
          </a>
          <a
            href="/privacy"
            style={{
              color: "#e2e8f0",
              margin: "0 15px",
              textDecoration: "none",
            }}
          >
            سياسة الخصوصية
          </a>
          <a
            href="mailto:info@tech2025.com"
            style={{
              color: "#e2e8f0",
              margin: "0 15px",
              textDecoration: "none",
            }}
          >
            اتصل بنا
          </a>
        </div>
        <p
          style={{
            margin: 0,
            fontSize: "13px",
            opacity: "0.8",
          }}
        >
          موقع تقن�� متطور • سريع وخفيف
        </p>
      </footer>
    </div>
  );
}
