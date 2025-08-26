import { useParams } from "react-router-dom";
import { getArticleById } from "../data/articles";

export default function Article() {
  const { id } = useParams<{ id: string }>();
  const article = id ? getArticleById(id) : undefined;

  if (!article) {
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
          minHeight: "100vh",
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
            آخر أخبار التطوير والتكنولوجيا
          </p>
        </header>

        {/* Error Content */}
        <main
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "60px 20px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "32px",
              fontWeight: "700",
              margin: "0 0 20px 0",
              color: "#e53e3e",
            }}
          >
            المقال غير موجود
          </h2>
          <p
            style={{
              fontSize: "18px",
              margin: "0 0 30px 0",
              color: "#4a5568",
            }}
          >
            عذراً، لم نتمكن من العثور على المقال المطلوب.
          </p>
          <a
            href="/"
            style={{
              backgroundColor: "#667eea",
              color: "white",
              padding: "12px 24px",
              textDecoration: "none",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            العودة إلى الصفحة الرئيسية
          </a>
        </main>
      </div>
    );
  }

  const getCategoryName = (category: string) => {
    switch (category) {
      case "programming":
        return "البرمجة والتطوير";
      case "ai":
        return "الذكاء الاصطناعي";
      case "security":
        return "الأمن السيبراني";
      case "mobile":
        return "تطبيقات الهاتف";
      default:
        return "عام";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "programming":
        return "#667eea";
      case "ai":
        return "#48bb78";
      case "security":
        return "#ed8936";
      case "mobile":
        return "#9f7aea";
      default:
        return "#718096";
    }
  };

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
              backgroundColor:
                article.category === "programming" ? "#667eea" : "#f7fafc",
              color: article.category === "programming" ? "white" : "#4a5568",
              textDecoration: "none",
              borderRadius: "20px",
              fontSize: "14px",
              border:
                article.category === "programming"
                  ? "none"
                  : "1px solid #e2e8f0",
              fontWeight: article.category === "programming" ? "500" : "normal",
            }}
          >
            💻 البرمجة
          </a>
          <a
            href="/ai"
            style={{
              padding: "8px 16px",
              backgroundColor:
                article.category === "ai" ? "#48bb78" : "#f7fafc",
              color: article.category === "ai" ? "white" : "#4a5568",
              textDecoration: "none",
              borderRadius: "20px",
              fontSize: "14px",
              border: article.category === "ai" ? "none" : "1px solid #e2e8f0",
              fontWeight: article.category === "ai" ? "500" : "normal",
            }}
          >
            🤖 الذكاء الاصطناعي
          </a>
          <a
            href="/security"
            style={{
              padding: "8px 16px",
              backgroundColor:
                article.category === "security" ? "#ed8936" : "#f7fafc",
              color: article.category === "security" ? "white" : "#4a5568",
              textDecoration: "none",
              borderRadius: "20px",
              fontSize: "14px",
              border:
                article.category === "security" ? "none" : "1px solid #e2e8f0",
              fontWeight: article.category === "security" ? "500" : "normal",
            }}
          >
            🔐 الأمن السيبراني
          </a>
          <a
            href="/mobile"
            style={{
              padding: "8px 16px",
              backgroundColor:
                article.category === "mobile" ? "#9f7aea" : "#f7fafc",
              color: article.category === "mobile" ? "white" : "#4a5568",
              textDecoration: "none",
              borderRadius: "20px",
              fontSize: "14px",
              border:
                article.category === "mobile" ? "none" : "1px solid #e2e8f0",
              fontWeight: article.category === "mobile" ? "500" : "normal",
            }}
          >
            📱 تطبيقات الهاتف
          </a>
        </div>
      </nav>

      {/* Article Content */}
      <main
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "30px 15px",
        }}
      >
        {/* Article Header */}
        <div
          style={{
            backgroundColor: "white",
            padding: "40px",
            borderRadius: "15px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            border: "1px solid #e8eaed",
            marginBottom: "30px",
          }}
        >
          {/* Category Badge */}
          <div
            style={{
              backgroundColor: getCategoryColor(article.category),
              color: "white",
              padding: "8px 16px",
              borderRadius: "20px",
              fontSize: "14px",
              fontWeight: "600",
              display: "inline-block",
              marginBottom: "20px",
            }}
          >
            {getCategoryName(article.category)}
          </div>

          {/* Article Title */}
          <h1
            style={{
              fontSize: "36px",
              fontWeight: "800",
              margin: "0 0 20px 0",
              lineHeight: "1.2",
              color: "#1a365d",
            }}
          >
            {article.title}
          </h1>

          {/* Article Meta */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              marginBottom: "25px",
              fontSize: "14px",
              color: "#718096",
            }}
          >
            <span
              style={{
                backgroundColor: "#f7fafc",
                padding: "6px 12px",
                borderRadius: "15px",
              }}
            >
              📅 {new Date(article.date).toLocaleDateString("ar-SA")}
            </span>
            <span
              style={{
                backgroundColor: "#f7fafc",
                padding: "6px 12px",
                borderRadius: "15px",
              }}
            >
              ⏱️ {article.readTime}
            </span>
          </div>

          {/* Article Excerpt */}
          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.7",
              color: "#4a5568",
              margin: 0,
              fontWeight: "400",
            }}
          >
            {article.excerpt}
          </p>
        </div>

        {/* Article Body */}
        <div
          style={{
            backgroundColor: "white",
            padding: "40px",
            borderRadius: "15px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            border: "1px solid #e8eaed",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              color: "#2d3748",
            }}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>

        {/* Article Tags */}
        <div
          style={{
            backgroundColor: "white",
            padding: "25px",
            borderRadius: "12px",
            boxShadow: "0 2px 15px rgba(0,0,0,0.06)",
            border: "1px solid #e8eaed",
            marginBottom: "30px",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              margin: "0 0 15px 0",
              color: "#1a365d",
            }}
          >
            الكلمات المفتاحية
          </h3>
          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            {article.tags.map((tag, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: "#f0f8ff",
                  color: "#667eea",
                  padding: "6px 12px",
                  borderRadius: "15px",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Back to Category */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          <a
            href={`/${article.category}`}
            style={{
              backgroundColor: getCategoryColor(article.category),
              color: "white",
              padding: "15px 30px",
              textDecoration: "none",
              borderRadius: "25px",
              fontSize: "16px",
              fontWeight: "500",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              marginLeft: "15px",
            }}
          >
            المزيد من مقالات {getCategoryName(article.category)}
          </a>
          <a
            href="/"
            style={{
              backgroundColor: "#4a5568",
              color: "white",
              padding: "15px 30px",
              textDecoration: "none",
              borderRadius: "25px",
              fontSize: "16px",
              fontWeight: "500",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            }}
          >
            العودة إلى الرئيسية
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
          موقع تقني متطور • سريع وخفيف
        </p>
      </footer>
    </div>
  );
}
