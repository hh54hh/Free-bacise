export default function Index() {
  return (
    <div style={{ 
      direction: 'rtl', 
      fontFamily: 'system-ui, -apple-system, Arial, sans-serif', 
      backgroundColor: '#fafafa', 
      color: '#2c3e50', 
      margin: 0, 
      padding: 0,
      lineHeight: '1.6'
    }}>
      
      {/* Header */}
      <header style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
        color: 'white',
        padding: '25px 15px', 
        textAlign: 'center',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ 
          margin: '0 0 8px 0', 
          fontSize: '32px', 
          fontWeight: '800',
          textShadow: '0 2px 4px rgba(0,0,0,0.3)'
        }}>
          تكنولوجيا 2025
        </h1>
        <p style={{ 
          margin: 0, 
          fontSize: '16px', 
          opacity: '0.9',
          fontWeight: '400'
        }}>
          آخر أخبار التطوير والتكنولوجيا
        </p>
      </header>

      {/* Navigation */}
      <nav style={{
        backgroundColor: 'white',
        padding: '15px',
        borderBottom: '2px solid #e2e8f0',
        textAlign: 'center',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
      }}>
        <div style={{ 
          maxWidth: '1000px', 
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '12px'
        }}>
          <a href="/" style={{ 
            padding: '10px 18px', 
            backgroundColor: '#667eea', 
            color: 'white',
            textDecoration: 'none',
            borderRadius: '25px',
            fontSize: '14px',
            fontWeight: '500',
            boxShadow: '0 2px 8px rgba(102,126,234,0.3)'
          }}>
            🏠 الرئيسية
          </a>
          <a href="/programming" style={{ 
            padding: '10px 18px', 
            backgroundColor: '#f7fafc', 
            color: '#4a5568',
            textDecoration: 'none',
            borderRadius: '25px',
            fontSize: '14px',
            border: '2px solid #e2e8f0',
            fontWeight: '500'
          }}>
            💻 البرمجة
          </a>
          <a href="/ai" style={{ 
            padding: '10px 18px', 
            backgroundColor: '#f7fafc', 
            color: '#4a5568',
            textDecoration: 'none',
            borderRadius: '25px',
            fontSize: '14px',
            border: '2px solid #e2e8f0',
            fontWeight: '500'
          }}>
            🤖 الذكاء الاصطناعي
          </a>
          <a href="/security" style={{ 
            padding: '10px 18px', 
            backgroundColor: '#f7fafc', 
            color: '#4a5568',
            textDecoration: 'none',
            borderRadius: '25px',
            fontSize: '14px',
            border: '2px solid #e2e8f0',
            fontWeight: '500'
          }}>
            🔐 الأمن السيبراني
          </a>
          <a href="/mobile" style={{ 
            padding: '10px 18px', 
            backgroundColor: '#f7fafc', 
            color: '#4a5568',
            textDecoration: 'none',
            borderRadius: '25px',
            fontSize: '14px',
            border: '2px solid #e2e8f0',
            fontWeight: '500'
          }}>
            📱 تطبيقات الهاتف
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ 
        maxWidth: '1000px', 
        margin: '0 auto', 
        padding: '30px 15px'
      }}>
        
        {/* Welcome Section */}
        <section style={{
          backgroundColor: 'white',
          padding: '30px',
          borderRadius: '15px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          border: '1px solid #e8eaed',
          marginBottom: '40px',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '28px',
            fontWeight: '700',
            margin: '0 0 20px 0',
            color: '#1a365d'
          }}>
            مرحباً بك في عالم التكنولوجيا 2025
          </h2>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.7',
            color: '#4a5568',
            maxWidth: '700px',
            margin: '0 auto',
            marginBottom: '25px'
          }}>
            اكتشف أحدث الأخبار والتطورات في عالم التكنولوجيا والبرمجة. من الذكاء الاصطناعي إلى الأمن السيبراني، نقدم لك كل ما تحتاجه لتبقى في الم��دمة.
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '15px',
            flexWrap: 'wrap'
          }}>
            <span style={{
              backgroundColor: '#f0f8ff',
              color: '#667eea',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: '500'
            }}>
              ⚡ سريع وخفيف
            </span>
            <span style={{
              backgroundColor: '#f0fff4',
              color: '#48bb78',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: '500'
            }}>
              📱 متوافق مع Free Basics
            </span>
            <span style={{
              backgroundColor: '#fffaf0',
              color: '#ed8936',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: '500'
            }}>
              🌐 محتوى عربي أصيل
            </span>
          </div>
        </section>

        {/* Featured Article */}
        <article style={{ 
          backgroundColor: 'white',
          marginBottom: '35px', 
          padding: '35px',
          borderRadius: '15px',
          boxShadow: '0 6px 25px rgba(0,0,0,0.1)',
          border: '2px solid #667eea'
        }}>
          <div style={{
            backgroundColor: '#667eea',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: '600',
            display: 'inline-block',
            marginBottom: '15px'
          }}>
            🔥 مقال مميز
          </div>
          <h2 style={{ 
            fontSize: '28px', 
            fontWeight: '700', 
            margin: '0 0 15px 0', 
            lineHeight: '1.3',
            color: '#1a365d'
          }}>
            الذكاء الاصطناعي في عام 2025: ثورة تقنية جديدة تغير العالم
          </h2>
          <div style={{ 
            fontSize: '13px', 
            color: '#718096', 
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            flexWrap: 'wrap'
          }}>
            <span style={{
              backgroundColor: '#f7fafc',
              padding: '6px 12px',
              borderRadius: '15px',
              fontSize: '12px',
              fontWeight: '500'
            }}>
              📅 15 يناير 2025
            </span>
            <span style={{
              backgroundColor: '#f0fff4',
              color: '#38a169',
              padding: '6px 12px',
              borderRadius: '15px',
              fontSize: '12px',
              fontWeight: '500'
            }}>
              🤖 ذكاء اصطناعي
            </span>
            <span style={{
              backgroundColor: '#fff5f5',
              color: '#e53e3e',
              padding: '6px 12px',
              borderRadius: '15px',
              fontSize: '12px',
              fontWeight: '500'
            }}>
              🔥 ترندينغ
            </span>
          </div>
          <p style={{ 
            fontSize: '19px', 
            lineHeight: '1.8', 
            margin: '0 0 20px 0',
            color: '#2d3748'
          }}>
            يشهد عام 2025 تطورات مذهلة ومتسارعة في مجال الذكاء الاصطناعي، حيث تستمر النماذج اللغوية الكبيرة في التطور بوتيرة سريعة وتصبح أكثر دقة وفعالية في فهم السياق والتفاعل الطبيعي مع البشر.
          </p>
          <p style={{ 
            fontSize: '17px', 
            lineHeight: '1.7', 
            margin: 0,
            color: '#4a5568'
          }}>
            الشركات التقنية الكبرى تركز بشكل متزايد على تطوير ذكاء اصطناعي أكثر أماناً وشفافية، مع التركيز على الاستخدام الأخلاقي للتكنولوجيا وحماية خصوصية المستخدمين في عصر البيانات الضخمة.
          </p>
        </article>

        {/* Quick Links to Sections */}
        <section style={{
          marginBottom: '40px'
        }}>
          <h3 style={{
            fontSize: '24px',
            fontWeight: '700',
            margin: '0 0 25px 0',
            color: '#1a365d',
            textAlign: 'center'
          }}>
            استكشف أقسامنا المتخصصة
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '20px' 
          }}>
            <a href="/programming" style={{
              backgroundColor: 'white',
              padding: '25px',
              borderRadius: '12px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
              border: '2px solid #667eea',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'all 0.2s ease'
            }}>
              <div style={{
                fontSize: '32px',
                marginBottom: '15px',
                textAlign: 'center'
              }}>💻</div>
              <h4 style={{
                fontSize: '20px',
                fontWeight: '600',
                margin: '0 0 12px 0',
                color: '#667eea',
                textAlign: 'center'
              }}>البرمجة والتطوير</h4>
              <p style={{
                fontSize: '15px',
                lineHeight: '1.6',
                margin: 0,
                color: '#4a5568',
                textAlign: 'center'
              }}>أحدث لغات البرمجة، الأطر والمكتبات، وأفضل الممارسات في التطوير</p>
            </a>

            <a href="/ai" style={{
              backgroundColor: 'white',
              padding: '25px',
              borderRadius: '12px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
              border: '2px solid #48bb78',
              textDecoration: 'none',
              color: 'inherit'
            }}>
              <div style={{
                fontSize: '32px',
                marginBottom: '15px',
                textAlign: 'center'
              }}>��</div>
              <h4 style={{
                fontSize: '20px',
                fontWeight: '600',
                margin: '0 0 12px 0',
                color: '#48bb78',
                textAlign: 'center'
              }}>الذكاء الاصطناعي</h4>
              <p style={{
                fontSize: '15px',
                lineHeight: '1.6',
                margin: 0,
                color: '#4a5568',
                textAlign: 'center'
              }}>آخر التطورات في الذكاء الاصطناعي، التعلم الآلي، والشبكات العصبية</p>
            </a>

            <a href="/security" style={{
              backgroundColor: 'white',
              padding: '25px',
              borderRadius: '12px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
              border: '2px solid #ed8936',
              textDecoration: 'none',
              color: 'inherit'
            }}>
              <div style={{
                fontSize: '32px',
                marginBottom: '15px',
                textAlign: 'center'
              }}>🔐</div>
              <h4 style={{
                fontSize: '20px',
                fontWeight: '600',
                margin: '0 0 12px 0',
                color: '#ed8936',
                textAlign: 'center'
              }}>الأمن السيبراني</h4>
              <p style={{
                fontSize: '15px',
                lineHeight: '1.6',
                margin: 0,
                color: '#4a5568',
                textAlign: 'center'
              }}>حماية البيانات، التهديدات الأمنية، وأفضل ممارسات الأمان الرقمي</p>
            </a>

            <a href="/mobile" style={{
              backgroundColor: 'white',
              padding: '25px',
              borderRadius: '12px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
              border: '2px solid #9f7aea',
              textDecoration: 'none',
              color: 'inherit'
            }}>
              <div style={{
                fontSize: '32px',
                marginBottom: '15px',
                textAlign: 'center'
              }}>📱</div>
              <h4 style={{
                fontSize: '20px',
                fontWeight: '600',
                margin: '0 0 12px 0',
                color: '#9f7aea',
                textAlign: 'center'
              }}>تطبيقات الهاتف</h4>
              <p style={{
                fontSize: '15px',
                lineHeight: '1.6',
                margin: 0,
                color: '#4a5568',
                textAlign: 'center'
              }}>تطوير التطبيقات المحمولة، منصات التطوير، وتصميم واجهات المستخدم</p>
            </a>
          </div>
        </section>

        {/* Latest Articles Grid */}
        <section style={{
          marginBottom: '40px'
        }}>
          <h3 style={{
            fontSize: '24px',
            fontWeight: '700',
            margin: '0 0 25px 0',
            color: '#1a365d',
            textAlign: 'center'
          }}>
            أحدث المقالات
          </h3>
          <div style={{ display: 'grid', gap: '25px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            
            <article style={{ 
              backgroundColor: 'white',
              padding: '25px',
              borderRadius: '12px',
              boxShadow: '0 3px 15px rgba(0,0,0,0.08)',
              border: '1px solid #e8eaed'
            }}>
              <h4 style={{ 
                fontSize: '18px', 
                fontWeight: '600', 
                margin: '0 0 12px 0',
                color: '#2d3748'
              }}>
                React 19: الميزات الجديدة والتحسينات المنتظرة
              </h4>
              <div style={{ 
                fontSize: '12px', 
                color: '#718096', 
                marginBottom: '15px',
                backgroundColor: '#f0f8ff',
                padding: '4px 10px',
                borderRadius: '12px',
                display: 'inline-block'
              }}>
                💻 البرمجة • 10 يناير 2025
              </div>
              <p style={{ 
                fontSize: '15px', 
                lineHeight: '1.6', 
                margin: 0,
                color: '#4a5568'
              }}>
                React 19 يقدم ميزات جديدة مثل Server Components المحسنة والـ Concurrent Features...
              </p>
            </article>

            <article style={{ 
              backgroundColor: 'white',
              padding: '25px',
              borderRadius: '12px',
              boxShadow: '0 3px 15px rgba(0,0,0,0.08)',
              border: '1px solid #e8eaed'
            }}>
              <h4 style={{ 
                fontSize: '18px', 
                fontWeight: '600', 
                margin: '0 0 12px 0',
                color: '#2d3748'
              }}>
                ChatGPT-5: الجيل الجديد من الذكاء الاصطناعي
              </h4>
              <div style={{ 
                fontSize: '12px', 
                color: '#718096', 
                marginBottom: '15px',
                backgroundColor: '#f0fff4',
                padding: '4px 10px',
                borderRadius: '12px',
                display: 'inline-block'
              }}>
                🤖 ذكاء اصطناعي • 12 يناير 2025
              </div>
              <p style={{ 
                fontSize: '15px', 
                lineHeight: '1.6', 
                margin: 0,
                color: '#4a5568'
              }}>
                OpenAI تكشف عن ChatGPT-5 مع قدرات محسنة بشكل كبير في فهم السياق...
              </p>
            </article>

            <article style={{ 
              backgroundColor: 'white',
              padding: '25px',
              borderRadius: '12px',
              boxShadow: '0 3px 15px rgba(0,0,0,0.08)',
              border: '1px solid #e8eaed'
            }}>
              <h4 style={{ 
                fontSize: '18px', 
                fontWeight: '600', 
                margin: '0 0 12px 0',
                color: '#2d3748'
              }}>
                هجمات الفدية الإلكترونية: التهديدات الجديدة
              </h4>
              <div style={{ 
                fontSize: '12px', 
                color: '#718096', 
                marginBottom: '15px',
                backgroundColor: '#fffaf0',
                padding: '4px 10px',
                borderRadius: '12px',
                display: 'inline-block'
              }}>
                🔐 أمن سيبراني • 14 يناير 2025
              </div>
              <p style={{ 
                fontSize: '15px', 
                lineHeight: '1.6', 
                margin: 0,
                color: '#4a5568'
              }}>
                تطور جديد في هجمات الفدية الإلكترونية يستهدف الشركات الصغيرة والمتوسطة...
              </p>
            </article>

            <article style={{ 
              backgroundColor: 'white',
              padding: '25px',
              borderRadius: '12px',
              boxShadow: '0 3px 15px rgba(0,0,0,0.08)',
              border: '1px solid #e8eaed'
            }}>
              <h4 style={{ 
                fontSize: '18px', 
                fontWeight: '600', 
                margin: '0 0 12px 0',
                color: '#2d3748'
              }}>
                Flutter 3.16: تطوير التطبيقات عبر المنصات
              </h4>
              <div style={{ 
                fontSize: '12px', 
                color: '#718096', 
                marginBottom: '15px',
                backgroundColor: '#faf5ff',
                padding: '4px 10px',
                borderRadius: '12px',
                display: 'inline-block'
              }}>
                📱 تطبيقات الهاتف • 13 يناير 2025
              </div>
              <p style={{ 
                fontSize: '15px', 
                lineHeight: '1.6', 
                margin: 0,
                color: '#4a5568'
              }}>
                Google تطلق Flutter 3.16 مع تحسينات كبيرة في الأداء ودعم أفضل للـ Material Design...
              </p>
            </article>

          </div>
        </section>

        {/* Statistics */}
        <section style={{
          backgroundColor: 'white',
          padding: '30px',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          border: '1px solid #e8eaed',
          marginBottom: '40px'
        }}>
          <h3 style={{
            fontSize: '22px',
            fontWeight: '700',
            margin: '0 0 25px 0',
            color: '#1a365d',
            textAlign: 'center'
          }}>
            إحصائيات الموقع
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '20px',
            textAlign: 'center'
          }}>
            <div>
              <div style={{
                fontSize: '32px',
                fontWeight: '800',
                color: '#667eea',
                marginBottom: '8px'
              }}>150+</div>
              <div style={{
                fontSize: '14px',
                color: '#4a5568'
              }}>مقال متخصص</div>
            </div>
            <div>
              <div style={{
                fontSize: '32px',
                fontWeight: '800',
                color: '#48bb78',
                marginBottom: '8px'
              }}>12</div>
              <div style={{
                fontSize: '14px',
                color: '#4a5568'
              }}>قسم متنوع</div>
            </div>
            <div>
              <div style={{
                fontSize: '32px',
                fontWeight: '800',
                color: '#ed8936',
                marginBottom: '8px'
              }}>25+</div>
              <div style={{
                fontSize: '14px',
                color: '#4a5568'
              }}>تحديث أسبوعي</div>
            </div>
            <div>
              <div style={{
                fontSize: '32px',
                fontWeight: '800',
                color: '#9f7aea',
                marginBottom: '8px'
              }}>100%</div>
              <div style={{
                fontSize: '14px',
                color: '#4a5568'
              }}>محتوى عربي</div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer style={{ 
        background: 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)',
        color: 'white',
        marginTop: '60px', 
        padding: '40px 15px', 
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <h4 style={{
            fontSize: '20px',
            fontWeight: '600',
            margin: '0 0 20px 0'
          }}>
            تكنولوجيا 2025
          </h4>
          <p style={{ 
            margin: '0 0 25px 0', 
            fontSize: '16px',
            opacity: '0.9',
            maxWidth: '500px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            مصدرك الموثوق لأحدث أخبار التكنولوجيا والتطوير باللغة العربية
          </p>
          <div style={{ 
            fontSize: '15px', 
            marginBottom: '20px',
            display: 'flex',
            justifyContent: 'center',
            gap: '25px',
            flexWrap: 'wrap'
          }}>
            <a href="/about" style={{ 
              color: '#e2e8f0', 
              textDecoration: 'none',
              padding: '8px 0',
              borderBottom: '2px solid transparent'
            }}>
              من نحن
            </a>
            <a href="/privacy" style={{ 
              color: '#e2e8f0', 
              textDecoration: 'none',
              padding: '8px 0',
              borderBottom: '2px solid transparent'
            }}>
              سياسة الخصوصية
            </a>
            <a href="mailto:info@tech2025.com" style={{ 
              color: '#e2e8f0', 
              textDecoration: 'none',
              padding: '8px 0',
              borderBottom: '2px solid transparent'
            }}>
              اتصل بنا
            </a>
          </div>
          <div style={{
            paddingTop: '20px',
            borderTop: '1px solid #4a5568',
            fontSize: '14px',
            opacity: '0.8'
          }}>
            <p style={{ margin: '0 0 10px 0' }}>
              © 2025 تكنولوجيا 2025 - جميع الحقوق محفوظة
            </p>
            <p style={{ margin: 0, fontSize: '13px' }}>
              🚀 متوافق مع Free Basics • ⚡ سريع وخفيف • 🌐 محتوى عربي أصيل
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
