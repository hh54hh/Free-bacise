export default function Privacy() {
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
            سياسة الخصوصية
          </h2>

          <div
            style={{
              fontSize: "16px",
              lineHeight: "1.6",
              marginBottom: "30px",
              background: "linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 100%)",
              padding: "20px",
              borderRadius: "12px",
              border: "2px solid #667eea",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "18px",
                fontWeight: "500",
                color: "#1a365d",
                textAlign: "center",
              }}
            >
              <strong>آخر تحديث:</strong> 15 يناير 2025
            </p>
          </div>

          <div style={{ fontSize: "17px", lineHeight: "1.7" }}>
            <section style={{ marginBottom: "35px" }}>
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  margin: "0 0 20px 0",
                  color: "#667eea",
                  borderRight: "4px solid #667eea",
                  paddingRight: "15px",
                }}
              >
                1. مقدمة
              </h3>
              <p
                style={{
                  margin: "0 0 20px 0",
                  color: "#2d3748",
                  backgroundColor: "#f7fafc",
                  padding: "20px",
                  borderRadius: "8px",
                }}
              >
                نحن في "تكنولوجيا 2025" نحترم خصوصيتك ونلتزم بحماية بياناتك
                الشخصية. توضح هذه السياسة كيفية جمع واستخدام وحماية معلوماتك.
              </p>
            </section>

            <section style={{ marginBottom: "35px" }}>
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  margin: "0 0 20px 0",
                  color: "#48bb78",
                  borderRight: "4px solid #48bb78",
                  paddingRight: "15px",
                }}
              >
                2. البيانات التي نجمعها
              </h3>
              <p
                style={{
                  margin: "0 0 15px 0",
                  color: "#2d3748",
                }}
              >
                نحن نجمع الحد الأدنى من البيانات اللازمة لتشغيل الموقع:
              </p>
              <ul
                style={{
                  margin: "0 0 20px 30px",
                  padding: 0,
                  listStyle: "none",
                }}
              >
                <li
                  style={{
                    margin: "0 0 12px 0",
                    padding: "12px 15px",
                    backgroundColor: "#f0fff4",
                    borderRight: "3px solid #48bb78",
                    borderRadius: "6px",
                  }}
                >
                  معلومات الزيارة الأساسية (عدد الزيارات، الصفحات المشاهدة)
                </li>
                <li
                  style={{
                    margin: "0 0 12px 0",
                    padding: "12px 15px",
                    backgroundColor: "#f0fff4",
                    borderRight: "3px solid #48bb78",
                    borderRadius: "6px",
                  }}
                >
                  نوع المتصفح والجهاز (لتحسين الخدمة)
                </li>
                <li
                  style={{
                    margin: "0 0 12px 0",
                    padding: "12px 15px",
                    backgroundColor: "#f0fff4",
                    borderRight: "3px solid #48bb78",
                    borderRadius: "6px",
                  }}
                >
                  عنوان IP المجهول (للإحصائيات العامة)
                </li>
              </ul>
            </section>

            <section style={{ marginBottom: "35px" }}>
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  margin: "0 0 20px 0",
                  color: "#ed8936",
                  borderRight: "4px solid #ed8936",
                  paddingRight: "15px",
                }}
              >
                3. كيفية استخدام البيانات
              </h3>
              <p
                style={{
                  margin: "0 0 15px 0",
                  color: "#2d3748",
                }}
              >
                نستخدم البيانات المجمعة لـ:
              </p>
              <ul
                style={{
                  margin: "0 0 20px 30px",
                  padding: 0,
                  listStyle: "none",
                }}
              >
                <li
                  style={{
                    margin: "0 0 12px 0",
                    padding: "12px 15px",
                    backgroundColor: "#fffaf0",
                    borderRight: "3px solid #ed8936",
                    borderRadius: "6px",
                  }}
                >
                  تحسين محتوى الموقع وسرعة التحميل
                </li>
                <li
                  style={{
                    margin: "0 0 12px 0",
                    padding: "12px 15px",
                    backgroundColor: "#fffaf0",
                    borderRight: "3px solid #ed8936",
                    borderRadius: "6px",
                  }}
                >
                  فهم اهتمامات القراء (بشكل عام ومجهول)
                </li>
                <li
                  style={{
                    margin: "0 0 12px 0",
                    padding: "12px 15px",
                    backgroundColor: "#fffaf0",
                    borderRight: "3px solid #ed8936",
                    borderRadius: "6px",
                  }}
                >
                  ضمان الأمان ومنع الاستخدام غير المشروع
                </li>
              </ul>
            </section>

            <section style={{ marginBottom: "35px" }}>
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  margin: "0 0 20px 0",
                  color: "#9f7aea",
                  borderRight: "4px solid #9f7aea",
                  paddingRight: "15px",
                }}
              >
                4. مشاركة البيانات
              </h3>
              <p
                style={{
                  margin: "0 0 20px 0",
                  color: "#2d3748",
                  backgroundColor: "#faf5ff",
                  padding: "20px",
                  borderRadius: "8px",
                  border: "1px solid #e9d8fd",
                }}
              >
                نحن لا نبيع أو نشارك أو ننقل بياناتك الشخصية إلى أطراف ثالثة.
                جميع البيانات تبقى محمية وسرية.
              </p>
            </section>

            <section style={{ marginBottom: "35px" }}>
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  margin: "0 0 20px 0",
                  color: "#38b2ac",
                  borderRight: "4px solid #38b2ac",
                  paddingRight: "15px",
                }}
              >
                5. الأمان
              </h3>
              <p
                style={{
                  margin: "0 0 20px 0",
                  color: "#2d3748",
                  backgroundColor: "#f0fdfa",
                  padding: "20px",
                  borderRadius: "8px",
                  border: "1px solid #81e6d9",
                }}
              >
                نتخذ إجراءات أمنية مناسبة لحماية بياناتك من الوصول غير المصرح به
                أو التغيير أو الإفصاح أو التدمير.
              </p>
            </section>

            <section style={{ marginBottom: "35px" }}>
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  margin: "0 0 20px 0",
                  color: "#e53e3e",
                  borderRight: "4px solid #e53e3e",
                  paddingRight: "15px",
                }}
              >
                6. ملفات تعريف الارتباط (Cookies)
              </h3>
              <p
                style={{
                  margin: "0 0 20px 0",
                  color: "#2d3748",
                  backgroundColor: "#fff5f5",
                  padding: "20px",
                  borderRadius: "8px",
                  border: "1px solid #fed7d7",
                }}
              >
                موقعنا لا يستخدم ملفات تعريف الارتباط لجمع البيانا�� الشخصية.
                نستخدم فقط التقنيات الأساسية لضمان عمل الموقع.
              </p>
            </section>

            <section style={{ marginBottom: "35px" }}>
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  margin: "0 0 20px 0",
                  color: "#667eea",
                  borderRight: "4px solid #667eea",
                  paddingRight: "15px",
                }}
              >
                7. حقوقك
              </h3>
              <p
                style={{
                  margin: "0 0 15px 0",
                  color: "#2d3748",
                }}
              >
                لك الحق في:
              </p>
              <ul
                style={{
                  margin: "0 0 20px 30px",
                  padding: 0,
                  listStyle: "none",
                }}
              >
                <li
                  style={{
                    margin: "0 0 12px 0",
                    padding: "12px 15px",
                    backgroundColor: "#f0f8ff",
                    borderRight: "3px solid #667eea",
                    borderRadius: "6px",
                  }}
                >
                  طلب معرفة البيانات المجمعة عنك
                </li>
                <li
                  style={{
                    margin: "0 0 12px 0",
                    padding: "12px 15px",
                    backgroundColor: "#f0f8ff",
                    borderRight: "3px solid #667eea",
                    borderRadius: "6px",
                  }}
                >
                  طلب تصحيح أو حذف بياناتك
                </li>
                <li
                  style={{
                    margin: "0 0 12px 0",
                    padding: "12px 15px",
                    backgroundColor: "#f0f8ff",
                    borderRight: "3px solid #667eea",
                    borderRadius: "6px",
                  }}
                >
                  الاعتراض على معالجة بياناتك
                </li>
              </ul>
            </section>

            <section style={{ marginBottom: "35px" }}>
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  margin: "0 0 20px 0",
                  color: "#48bb78",
                  borderRight: "4px solid #48bb78",
                  paddingRight: "15px",
                }}
              >
                8. التواصل
              </h3>
              <p
                style={{
                  margin: "0 0 20px 0",
                  color: "#2d3748",
                  backgroundColor: "#f0fff4",
                  padding: "20px",
                  borderRadius: "8px",
                  border: "1px solid #9ae6b4",
                }}
              >
                إذا كان لديك أي أسئلة حول هذه السياسة، يرجى التواصل معنا على:{" "}
                <strong>info@tech2025.com</strong>
              </p>
            </section>
          </div>

          <div style={{ textAlign: "center", marginTop: "50px" }}>
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
