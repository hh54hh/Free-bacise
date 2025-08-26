import { allArticles, getArticlesByCategory } from "../data/articles";

export default function Index() {
  // Get recent articles from each category
  const recentProgramming = getArticlesByCategory("programming").slice(0, 3);
  const recentAI = getArticlesByCategory("ai").slice(0, 3);
  const recentSecurity = getArticlesByCategory("security").slice(0, 3);
  const recentMobile = getArticlesByCategory("mobile").slice(0, 3);

  // Get all recent articles sorted by date
  const allRecentArticles = allArticles
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 8);

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
          تكنولوجيا 2025
        </h1>
        <p
          style={{
            margin: 0,
            fontSize: "16px",
            opacity: "0.9",
            fontWeight: "400",
          }}
        >
          آخر أخبار التطوير والتكنولوجيا
        </p>
      </header>

      {/* Navigation */}
      <nav
        style={{
          backgroundColor: "white",
          padding: "15px",
          borderBottom: "2px solid #e2e8f0",
          textAlign: "center",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "12px",
          }}
        >
          <a
            href="/"
            style={{
              padding: "10px 18px",
              backgroundColor: "#667eea",
              color: "white",
              textDecoration: "none",
              borderRadius: "25px",
              fontSize: "14px",
              fontWeight: "500",
              boxShadow: "0 2px 8px rgba(102,126,234,0.3)",
            }}
          >
            🏠 الرئيسية
          </a>
          <a
            href="/programming"
            style={{
              padding: "10px 18px",
              backgroundColor: "#f7fafc",
              color: "#4a5568",
              textDecoration: "none",
              borderRadius: "25px",
              fontSize: "14px",
              border: "2px solid #e2e8f0",
              fontWeight: "500",
            }}
          >
            💻 البرمجة
          </a>
          <a
            href="/ai"
            style={{
              padding: "10px 18px",
              backgroundColor: "#f7fafc",
              color: "#4a5568",
              textDecoration: "none",
              borderRadius: "25px",
              fontSize: "14px",
              border: "2px solid #e2e8f0",
              fontWeight: "500",
            }}
          >
            🤖 الذكاء الاصطناعي
          </a>
          <a
            href="/security"
            style={{
              padding: "10px 18px",
              backgroundColor: "#f7fafc",
              color: "#4a5568",
              textDecoration: "none",
              borderRadius: "25px",
              fontSize: "14px",
              border: "2px solid #e2e8f0",
              fontWeight: "500",
            }}
          >
            🔐 الأمن السيبراني
          </a>
          <a
            href="/mobile"
            style={{
              padding: "10px 18px",
              backgroundColor: "#f7fafc",
              color: "#4a5568",
              textDecoration: "none",
              borderRadius: "25px",
              fontSize: "14px",
              border: "2px solid #e2e8f0",
              fontWeight: "500",
            }}
          >
            📱 تطبيقات الهاتف
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "30px 15px",
        }}
      >
        {/* Welcome Section */}
        <section
          style={{
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "15px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            border: "1px solid #e8eaed",
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "28px",
              fontWeight: "700",
              margin: "0 0 20px 0",
              color: "#1a365d",
            }}
          >
            مرحباً بك في عالم التكنولوجيا 2025
          </h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.7",
              color: "#4a5568",
              maxWidth: "700px",
              margin: "0 auto",
              marginBottom: "25px",
            }}
          >
            اكتشف أكثر من {allArticles.length} مقال تقني متخصص في أحدث التطورات
            والأخبار في عالم التكنولوجيا والبرمجة.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                backgroundColor: "#f0f8ff",
                color: "#667eea",
                padding: "8px 16px",
                borderRadius: "20px",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              ⚡ سريع وخفيف
            </span>
            <span
              style={{
                backgroundColor: "#f0fff4",
                color: "#48bb78",
                padding: "8px 16px",
                borderRadius: "20px",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              📱 متوافق مع Free Basics
            </span>
            <span
              style={{
                backgroundColor: "#fffaf0",
                color: "#ed8936",
                padding: "8px 16px",
                borderRadius: "20px",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              🌐 محتوى عربي أصيل
            </span>
          </div>
        </section>

        {/* Featured Article */}
        {allRecentArticles.length > 0 && (
          <article
            style={{
              backgroundColor: "white",
              marginBottom: "35px",
              padding: "35px",
              borderRadius: "15px",
              boxShadow: "0 6px 25px rgba(0,0,0,0.1)",
              border: "2px solid #667eea",
            }}
          >
            <a
              href={`/article/${allRecentArticles[0].id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                style={{
                  backgroundColor: "#667eea",
                  color: "white",
                  padding: "8px 16px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: "600",
                  display: "inline-block",
                  marginBottom: "15px",
                }}
              >
                🔥 مقال مميز
              </div>
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: "700",
                  margin: "0 0 15px 0",
                  lineHeight: "1.3",
                  color: "#1a365d",
                }}
              >
                {allRecentArticles[0].title}
              </h2>
              <div
                style={{
                  fontSize: "13px",
                  color: "#718096",
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    backgroundColor: "#f7fafc",
                    padding: "6px 12px",
                    borderRadius: "15px",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  📅{" "}
                  {new Date(allRecentArticles[0].date).toLocaleDateString(
                    "ar-SA",
                  )}
                </span>
                <span
                  style={{
                    backgroundColor: "#f0fff4",
                    color: "#38a169",
                    padding: "6px 12px",
                    borderRadius: "15px",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  {allRecentArticles[0].category === "programming"
                    ? "💻 البرمجة"
                    : allRecentArticles[0].category === "ai"
                      ? "🤖 ذكاء اصطناعي"
                      : allRecentArticles[0].category === "security"
                        ? "🔐 أمن سيبراني"
                        : "📱 تطبيقات الهاتف"}
                </span>
                <span
                  style={{
                    backgroundColor: "#fff5f5",
                    color: "#e53e3e",
                    padding: "6px 12px",
                    borderRadius: "15px",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  ⏱️ {allRecentArticles[0].readTime}
                </span>
              </div>
              <p
                style={{
                  fontSize: "19px",
                  lineHeight: "1.8",
                  margin: 0,
                  color: "#2d3748",
                }}
              >
                {allRecentArticles[0].excerpt}
              </p>
            </a>
          </article>
        )}

        {/* Quick Links to Sections */}
        <section
          style={{
            marginBottom: "40px",
          }}
        >
          <h3
            style={{
              fontSize: "24px",
              fontWeight: "700",
              margin: "0 0 25px 0",
              color: "#1a365d",
              textAlign: "center",
            }}
          >
            استكشف أقسامنا المتخصصة
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
            }}
          >
            <a
              href="/programming"
              style={{
                backgroundColor: "white",
                padding: "25px",
                borderRadius: "12px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                border: "2px solid #667eea",
                textDecoration: "none",
                color: "inherit",
                transition: "all 0.2s ease",
              }}
            >
              <div
                style={{
                  fontSize: "32px",
                  marginBottom: "15px",
                  textAlign: "center",
                }}
              >
                💻
              </div>
              <h4
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  margin: "0 0 12px 0",
                  color: "#667eea",
                  textAlign: "center",
                }}
              >
                البرمجة والتطوير
              </h4>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.6",
                  margin: "0 0 15px 0",
                  color: "#4a5568",
                  textAlign: "center",
                }}
              >
                أحدث لغات البرمجة، الأطر والمكتبات، وأفضل الممارسات في التطوير
              </p>
              <div
                style={{
                  textAlign: "center",
                  fontSize: "14px",
                  color: "#667eea",
                  fontWeight: "500",
                }}
              >
                {getArticlesByCategory("programming").length} مقال متاح
              </div>
            </a>

            <a
              href="/ai"
              style={{
                backgroundColor: "white",
                padding: "25px",
                borderRadius: "12px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                border: "2px solid #48bb78",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                style={{
                  fontSize: "32px",
                  marginBottom: "15px",
                  textAlign: "center",
                }}
              >
                🤖
              </div>
              <h4
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  margin: "0 0 12px 0",
                  color: "#48bb78",
                  textAlign: "center",
                }}
              >
                الذكاء الاصطناعي
              </h4>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.6",
                  margin: "0 0 15px 0",
                  color: "#4a5568",
                  textAlign: "center",
                }}
              >
                آخر التطورات في ا��ذكاء الاصطناعي، التعلم الآلي، والشبكات
                العصبية
              </p>
              <div
                style={{
                  textAlign: "center",
                  fontSize: "14px",
                  color: "#48bb78",
                  fontWeight: "500",
                }}
              >
                {getArticlesByCategory("ai").length} مقال متاح
              </div>
            </a>

            <a
              href="/security"
              style={{
                backgroundColor: "white",
                padding: "25px",
                borderRadius: "12px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                border: "2px solid #ed8936",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                style={{
                  fontSize: "32px",
                  marginBottom: "15px",
                  textAlign: "center",
                }}
              >
                🔐
              </div>
              <h4
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  margin: "0 0 12px 0",
                  color: "#ed8936",
                  textAlign: "center",
                }}
              >
                الأمن السيبراني
              </h4>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.6",
                  margin: "0 0 15px 0",
                  color: "#4a5568",
                  textAlign: "center",
                }}
              >
                حماية البيانات، التهديدات الأمنية، وأفضل ممارسات الأمان الرقمي
              </p>
              <div
                style={{
                  textAlign: "center",
                  fontSize: "14px",
                  color: "#ed8936",
                  fontWeight: "500",
                }}
              >
                {getArticlesByCategory("security").length} مقال متاح
              </div>
            </a>

            <a
              href="/mobile"
              style={{
                backgroundColor: "white",
                padding: "25px",
                borderRadius: "12px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                border: "2px solid #9f7aea",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                style={{
                  fontSize: "32px",
                  marginBottom: "15px",
                  textAlign: "center",
                }}
              >
                📱
              </div>
              <h4
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  margin: "0 0 12px 0",
                  color: "#9f7aea",
                  textAlign: "center",
                }}
              >
                تطبيقات الهاتف
              </h4>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.6",
                  margin: "0 0 15px 0",
                  color: "#4a5568",
                  textAlign: "center",
                }}
              >
                تطوير التطبيقات المحمولة، منصات التطوير، وتصميم واجهات المستخدم
              </p>
              <div
                style={{
                  textAlign: "center",
                  fontSize: "14px",
                  color: "#9f7aea",
                  fontWeight: "500",
                }}
              >
                {getArticlesByCategory("mobile").length} مقال متاح
              </div>
            </a>
          </div>
        </section>

        {/* Latest Articles Grid */}
        <section
          style={{
            marginBottom: "40px",
          }}
        >
          <h3
            style={{
              fontSize: "24px",
              fontWeight: "700",
              margin: "0 0 25px 0",
              color: "#1a365d",
              textAlign: "center",
            }}
          >
            أحدث المقالات
          </h3>
          <div
            style={{
              display: "grid",
              gap: "25px",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            }}
          >
            {allRecentArticles.slice(1, 7).map((article, index) => (
              <article
                key={article.id}
                style={{
                  backgroundColor: "white",
                  padding: "25px",
                  borderRadius: "12px",
                  boxShadow: "0 3px 15px rgba(0,0,0,0.08)",
                  border: "1px solid #e8eaed",
                }}
              >
                <a
                  href={`/article/${article.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <h4
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      margin: "0 0 12px 0",
                      color: "#2d3748",
                      lineHeight: "1.4",
                    }}
                  >
                    {article.title}
                  </h4>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#718096",
                      marginBottom: "15px",
                      display: "flex",
                      gap: "10px",
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{
                        backgroundColor:
                          article.category === "programming"
                            ? "#f0f8ff"
                            : article.category === "ai"
                              ? "#f0fff4"
                              : article.category === "security"
                                ? "#fffaf0"
                                : "#faf5ff",
                        color:
                          article.category === "programming"
                            ? "#667eea"
                            : article.category === "ai"
                              ? "#48bb78"
                              : article.category === "security"
                                ? "#ed8936"
                                : "#9f7aea",
                        padding: "4px 10px",
                        borderRadius: "12px",
                        fontSize: "12px",
                      }}
                    >
                      {article.category === "programming"
                        ? "💻 البرمجة"
                        : article.category === "ai"
                          ? "🤖 ذكاء اصطناعي"
                          : article.category === "security"
                            ? "🔐 أمن سيبراني"
                            : "📱 تطبيقات الهاتف"}{" "}
                      • {new Date(article.date).toLocaleDateString("ar-SA")}
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
                    {article.excerpt.substring(0, 120)}...
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#718096",
                        backgroundColor: "#f7fafc",
                        padding: "4px 8px",
                        borderRadius: "10px",
                      }}
                    >
                      ⏱️ {article.readTime}
                    </span>
                    <span
                      style={{
                        color:
                          article.category === "programming"
                            ? "#667eea"
                            : article.category === "ai"
                              ? "#48bb78"
                              : article.category === "security"
                                ? "#ed8936"
                                : "#9f7aea",
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
        </section>

        {/* Statistics */}
        <section
          style={{
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            border: "1px solid #e8eaed",
            marginBottom: "40px",
          }}
        >
          <h3
            style={{
              fontSize: "22px",
              fontWeight: "700",
              margin: "0 0 25px 0",
              color: "#1a365d",
              textAlign: "center",
            }}
          >
            إحصائيات الموقع
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "20px",
              textAlign: "center",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "32px",
                  fontWeight: "800",
                  color: "#667eea",
                  marginBottom: "8px",
                }}
              >
                {allArticles.length}+
              </div>
              <div
                style={{
                  fontSize: "14px",
                  color: "#4a5568",
                }}
              >
                مقال متخصص
              </div>
            </div>
            <div>
              <div
                style={{
                  fontSize: "32px",
                  fontWeight: "800",
                  color: "#48bb78",
                  marginBottom: "8px",
                }}
              >
                4
              </div>
              <div
                style={{
                  fontSize: "14px",
                  color: "#4a5568",
                }}
              >
                قسم متنوع
              </div>
            </div>
            <div>
              <div
                style={{
                  fontSize: "32px",
                  fontWeight: "800",
                  color: "#ed8936",
                  marginBottom: "8px",
                }}
              >
                25+
              </div>
              <div
                style={{
                  fontSize: "14px",
                  color: "#4a5568",
                }}
              >
                تحديث أسبوعي
              </div>
            </div>
            <div>
              <div
                style={{
                  fontSize: "32px",
                  fontWeight: "800",
                  color: "#9f7aea",
                  marginBottom: "8px",
                }}
              >
                100%
              </div>
              <div
                style={{
                  fontSize: "14px",
                  color: "#4a5568",
                }}
              >
                محتوى عربي
              </div>
            </div>
          </div>
        </section>

        {/* Free Basics Compliance */}
        <section
          style={{
            backgroundColor: "#f0f8ff",
            padding: "30px",
            borderRadius: "12px",
            border: "2px solid #667eea",
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontSize: "22px",
              fontWeight: "700",
              margin: "0 0 15px 0",
              color: "#1a365d",
            }}
          >
            متوافق 100% مع Free Basics
          </h3>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.6",
              margin: "0 0 20px 0",
              color: "#4a5568",
            }}
          >
            موقعنا مُحسَّن خصيصاً ليلبي جميع متطلبات Facebook Free Basics للحصول
            على القبول الكامل
          </p>
          <a
            href="/free-basics-requirements"
            style={{
              backgroundColor: "#667eea",
              color: "white",
              padding: "12px 24px",
              textDecoration: "none",
              borderRadius: "20px",
              fontSize: "14px",
              fontWeight: "500",
              boxShadow: "0 4px 15px rgba(102,126,234,0.3)",
            }}
          >
            اطلع على متطلبات القبول
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer
        style={{
          background: "linear-gradient(135deg, #2d3748 0%, #4a5568 100%)",
          color: "white",
          marginTop: "60px",
          padding: "40px 15px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <h4
            style={{
              fontSize: "20px",
              fontWeight: "600",
              margin: "0 0 20px 0",
            }}
          >
            تكنولوجيا 2025
          </h4>
          <p
            style={{
              margin: "0 0 25px 0",
              fontSize: "16px",
              opacity: "0.9",
              maxWidth: "500px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            مصدرك الموثوق لأحدث أخبار التكنولوجيا والتطوير باللغة العربية مع
            أكثر من {allArticles.length} مقال متخصص
          </p>
          <div
            style={{
              fontSize: "15px",
              marginBottom: "20px",
              display: "flex",
              justifyContent: "center",
              gap: "25px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="/about"
              style={{
                color: "#e2e8f0",
                textDecoration: "none",
                padding: "8px 0",
                borderBottom: "2px solid transparent",
              }}
            >
              من نحن
            </a>
            <a
              href="/privacy"
              style={{
                color: "#e2e8f0",
                textDecoration: "none",
                padding: "8px 0",
                borderBottom: "2px solid transparent",
              }}
            >
              سياسة الخصوصية
            </a>
            <a
              href="/free-basics-requirements"
              style={{
                color: "#e2e8f0",
                textDecoration: "none",
                padding: "8px 0",
                borderBottom: "2px solid transparent",
              }}
            >
              متطلبات Free Basics
            </a>
            <a
              href="mailto:info@tech2025.com"
              style={{
                color: "#e2e8f0",
                textDecoration: "none",
                padding: "8px 0",
                borderBottom: "2px solid transparent",
              }}
            >
              اتصل بنا
            </a>
          </div>
          <div
            style={{
              paddingTop: "20px",
              borderTop: "1px solid #4a5568",
              fontSize: "14px",
              opacity: "0.8",
            }}
          >
            <p style={{ margin: "0 0 10px 0" }}>
              © 2025 تكنولوجيا 2025 - جميع الحقوق محفوظة
            </p>
            <p style={{ margin: 0, fontSize: "13px" }}>
              🚀 متوافق مع Free Basics • ⚡ سريع وخفيف • 🌐 محتوى عربي أصيل
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
