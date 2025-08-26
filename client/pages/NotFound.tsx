import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error:", location.pathname);
  }, [location.pathname]);

  return (
    <div
      style={{
        direction: "rtl",
        fontFamily: "system-ui, -apple-system, Arial, sans-serif",
        backgroundColor: "#fafafa",
        color: "#2c3e50",
        margin: 0,
        padding: 0,
        minHeight: "100vh",
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

      {/* 404 Content */}
      <main
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "60px 40px",
            borderRadius: "20px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
            border: "1px solid #e8eaed",
          }}
        >
          <div
            style={{
              fontSize: "120px",
              fontWeight: "800",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              margin: "0 0 30px 0",
              textShadow: "none",
            }}
          >
            404
          </div>

          <h2
            style={{
              fontSize: "32px",
              fontWeight: "700",
              margin: "0 0 20px 0",
              color: "#1a365d",
            }}
          >
            الصفحة غير موجودة
          </h2>

          <p
            style={{
              fontSize: "18px",
              margin: "0 0 40px 0",
              color: "#4a5568",
              maxWidth: "500px",
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: "1.6",
            }}
          >
            عذراً، الصفحة التي تبحث عنها غير موجودة أو قد تكون قد تم نقلها إلى
            مكان آخر.
          </p>

          <a
            href="/"
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
              padding: "15px 35px",
              textDecoration: "none",
              borderRadius: "25px",
              fontSize: "18px",
              fontWeight: "500",
              boxShadow: "0 4px 15px rgba(102,126,234,0.3)",
              display: "inline-block",
              transition: "all 0.3s ease",
            }}
          >
            العودة إلى الصفحة الرئيسية
          </a>

          {/* Additional helpful links */}
          <div
            style={{
              marginTop: "40px",
              paddingTop: "30px",
              borderTop: "2px solid #f1f5f9",
            }}
          >
            <p
              style={{
                fontSize: "16px",
                color: "#718096",
                marginBottom: "20px",
              }}
            >
              أو يمكنك زيارة:
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              <a
                href="/about"
                style={{
                  color: "#667eea",
                  textDecoration: "none",
                  padding: "8px 16px",
                  border: "2px solid #667eea",
                  borderRadius: "20px",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                من نحن
              </a>
              <a
                href="/privacy"
                style={{
                  color: "#667eea",
                  textDecoration: "none",
                  padding: "8px 16px",
                  border: "2px solid #667eea",
                  borderRadius: "20px",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                سياسة الخصوصية
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          background: "linear-gradient(135deg, #2d3748 0%, #4a5568 100%)",
          color: "white",
          padding: "30px 15px",
          textAlign: "center",
          marginTop: "auto",
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
              borderBottom: "1px solid transparent",
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
              borderBottom: "1px solid transparent",
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
              borderBottom: "1px solid transparent",
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
};

export default NotFound;
