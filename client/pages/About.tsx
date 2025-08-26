export default function About() {
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

      {/* Main Content */}
      <main
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "40px 15px",
        }}
      >
        <article
          style={{
            backgroundColor: "white",
            padding: "40px",
            borderRadius: "15px",
            boxShadow: "0 4px 25px rgba(0,0,0,0.08)",
            border: "1px solid #e8eaed",
          }}
        >
          <h2
            style={{
              fontSize: "36px",
              fontWeight: "700",
              margin: "0 0 30px 0",
              textAlign: "center",
              color: "#1a365d",
              borderBottom: "3px solid #667eea",
              paddingBottom: "15px",
            }}
          >
            من نحن
          </h2>

          <div
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              marginBottom: "35px",
            }}
          >
            <p
              style={{
                margin: "0 0 25px 0",
                color: "#2d3748",
                fontSize: "20px",
                fontWeight: "500",
              }}
            >
              تكنولوجيا 2025 هو موقع متخصص في تقديم أحدث الأخبار والمقالات في
              مجال التطوير والتكنولوجيا باللغة العربية.
            </p>

            <p
              style={{
                margin: "0 0 25px 0",
                color: "#4a5568",
                fontSize: "18px",
              }}
            >
              نهدف إلى توفير محتوى تقني عالي الجودة يساعد المطورين والمهتمين
              بالتكنولوجيا على البقاء محدثين بآخر التطورات في هذا المجال.
            </p>

            <p
              style={{
                margin: "0 0 20px 0",
                color: "#4a5568",
                fontSize: "18px",
              }}
            >
              يغطي موقعنا مواضيع متنوعة تشمل:
            </p>

            <ul
              style={{
                margin: "0 0 30px 30px",
                padding: 0,
                listStyle: "none",
              }}
            >
              <li
                style={{
                  margin: "0 0 15px 0",
                  padding: "12px 20px",
                  backgroundColor: "#f7fafc",
                  borderRight: "4px solid #667eea",
                  borderRadius: "8px",
                  fontSize: "16px",
                  color: "#2d3748",
                }}
              >
                الذ��اء الاصطناعي والتعلم الآلي
              </li>
              <li
                style={{
                  margin: "0 0 15px 0",
                  padding: "12px 20px",
                  backgroundColor: "#f7fafc",
                  borderRight: "4px solid #48bb78",
                  borderRadius: "8px",
                  fontSize: "16px",
                  color: "#2d3748",
                }}
              >
                تطوير الويب والتطبيقات
              </li>
              <li
                style={{
                  margin: "0 0 15px 0",
                  padding: "12px 20px",
                  backgroundColor: "#f7fafc",
                  borderRight: "4px solid #ed8936",
                  borderRadius: "8px",
                  fontSize: "16px",
                  color: "#2d3748",
                }}
              >
                الأمن السيبراني
              </li>
              <li
                style={{
                  margin: "0 0 15px 0",
                  padding: "12px 20px",
                  backgroundColor: "#f7fafc",
                  borderRight: "4px solid #9f7aea",
                  borderRadius: "8px",
                  fontSize: "16px",
                  color: "#2d3748",
                }}
              >
                البرمجة والتطوير
              </li>
              <li
                style={{
                  margin: "0 0 15px 0",
                  padding: "12px 20px",
                  backgroundColor: "#f7fafc",
                  borderRight: "4px solid #38b2ac",
                  borderRadius: "8px",
                  fontSize: "16px",
                  color: "#2d3748",
                }}
              >
                التقنيات الناشئة والابتكار
              </li>
            </ul>
          </div>

          <div
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
              padding: "30px",
              marginBottom: "35px",
              borderRadius: "12px",
              boxShadow: "0 4px 15px rgba(102,126,234,0.2)",
            }}
          >
            <h3
              style={{
                fontSize: "24px",
                fontWeight: "600",
                margin: "0 0 20px 0",
                textAlign: "center",
              }}
            >
              رسالتنا
            </h3>
            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.7",
                margin: 0,
                textAlign: "center",
                opacity: "0.95",
              }}
            >
              نسعى لجعل التكنولوجيا في متناول الجميع من خلال تقديم محتوى مبسط
              ومفهوم باللغة العربية، مما يساهم في نشر ال��عرفة التقنية في
              المنطقة العربية.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#f8fbff",
              padding: "30px",
              marginBottom: "35px",
              borderRadius: "12px",
              border: "2px solid #e2e8f0",
            }}
          >
            <h3
              style={{
                fontSize: "24px",
                fontWeight: "600",
                margin: "0 0 25px 0",
                color: "#1a365d",
                textAlign: "center",
              }}
            >
              معلومات الاتصال
            </h3>
            <div
              style={{
                display: "grid",
                gap: "15px",
                fontSize: "16px",
              }}
            >
              <p
                style={{
                  margin: 0,
                  padding: "15px",
                  backgroundColor: "white",
                  borderRadius: "8px",
                  border: "1px solid #e2e8f0",
                }}
              >
                <strong style={{ color: "#667eea" }}>البريد الإلكتروني:</strong>{" "}
                info@tech2025.com
              </p>
              <p
                style={{
                  margin: 0,
                  padding: "15px",
                  backgroundColor: "white",
                  borderRadius: "8px",
                  border: "1px solid #e2e8f0",
                }}
              >
                <strong style={{ color: "#667eea" }}>الموقع:</strong>{" "}
                www.tech2025.com
              </p>
              <p
                style={{
                  margin: 0,
                  padding: "15px",
                  backgroundColor: "white",
                  borderRadius: "8px",
                  border: "1px solid #e2e8f0",
                }}
              >
                <strong style={{ color: "#667eea" }}>التأسيس:</strong> 2025
              </p>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
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
              }}
            >
              العودة إلى الصفحة الرئيسية
            </a>
          </div>
        </article>
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
          متوافق مع Free Basics • سريع وخفيف
        </p>
      </footer>
    </div>
  );
}
