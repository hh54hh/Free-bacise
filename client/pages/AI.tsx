export default function AI() {
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
        background: 'linear-gradient(135deg, #48bb78 0%, #38a169 100%)', 
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
          <a href="/" style={{ color: 'white', textDecoration: 'none' }}>تكنولوجيا 2025</a>
        </h1>
        <p style={{ 
          margin: 0, 
          fontSize: '16px', 
          opacity: '0.9',
          fontWeight: '400'
        }}>
          قسم الذكاء الاصطناعي
        </p>
      </header>

      {/* Navigation */}
      <nav style={{
        backgroundColor: 'white',
        padding: '15px',
        borderBottom: '2px solid #e2e8f0',
        textAlign: 'center'
      }}>
        <div style={{ 
          maxWidth: '900px', 
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '10px'
        }}>
          <a href="/" style={{ 
            padding: '8px 16px', 
            backgroundColor: '#f7fafc', 
            color: '#4a5568',
            textDecoration: 'none',
            borderRadius: '20px',
            fontSize: '14px',
            border: '1px solid #e2e8f0'
          }}>
            الرئيسية
          </a>
          <a href="/programming" style={{ 
            padding: '8px 16px', 
            backgroundColor: '#f7fafc', 
            color: '#4a5568',
            textDecoration: 'none',
            borderRadius: '20px',
            fontSize: '14px',
            border: '1px solid #e2e8f0'
          }}>
            البرمجة
          </a>
          <a href="/ai" style={{ 
            padding: '8px 16px', 
            backgroundColor: '#48bb78', 
            color: 'white',
            textDecoration: 'none',
            borderRadius: '20px',
            fontSize: '14px',
            fontWeight: '500'
          }}>
            الذكاء الاصطناعي
          </a>
          <a href="/security" style={{ 
            padding: '8px 16px', 
            backgroundColor: '#f7fafc', 
            color: '#4a5568',
            textDecoration: 'none',
            borderRadius: '20px',
            fontSize: '14px',
            border: '1px solid #e2e8f0'
          }}>
            الأمن السيبراني
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ 
        maxWidth: '900px', 
        margin: '0 auto', 
        padding: '30px 15px'
      }}>
        
        <h2 style={{
          fontSize: '28px',
          fontWeight: '700',
          margin: '0 0 30px 0',
          color: '#1a365d',
          textAlign: 'center',
          borderBottom: '3px solid #48bb78',
          paddingBottom: '15px'
        }}>
          أحدث أخبار الذكاء الاصطناعي
        </h2>

        {/* Featured Article */}
        <article style={{ 
          backgroundColor: 'white',
          padding: '30px',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          border: '2px solid #48bb78',
          marginBottom: '30px'
        }}>
          <h3 style={{ 
            fontSize: '24px', 
            fontWeight: '700', 
            margin: '0 0 15px 0',
            color: '#1a365d'
          }}>
            ChatGPT-5: الجيل الجديد من الذكاء الاصطناعي التحادثي
          </h3>
          <div style={{ 
            fontSize: '12px', 
            color: '#718096', 
            marginBottom: '20px',
            backgroundColor: '#f0fff4',
            padding: '8px 15px',
            borderRadius: '8px',
            display: 'inline-block'
          }}>
            15 يناير 2025 • مقال مميز
          </div>
          <p style={{ 
            fontSize: '18px', 
            lineHeight: '1.7', 
            margin: '0 0 20px 0',
            color: '#2d3748'
          }}>
            OpenAI تكشف عن ChatGPT-5 مع قدرات محسنة بشكل كبير في فهم السياق، التفكير المنطقي، والتعامل مع المهام المعقدة. النموذج الجديد يحمل تحسينات جذرية في الأمان والدقة.
          </p>
          <p style={{ 
            fontSize: '16px', 
            lineHeight: '1.6', 
            margin: 0,
            color: '#4a5568'
          }}>
            الميزات الجديدة تشمل قدرة أفضل على حل المشاكل الرياضية المعقدة، فهم أعمق للصور والفيديو، وتحسين كبير في اللغات غير الإنجليزية بما فيها العربية.
          </p>
        </article>

        {/* Articles */}
        <div style={{ display: 'grid', gap: '25px' }}>
          
          <article style={{ 
            backgroundColor: 'white',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 15px rgba(0,0,0,0.06)',
            border: '1px solid #e8eaed'
          }}>
            <h3 style={{ 
              fontSize: '20px', 
              fontWeight: '600', 
              margin: '0 0 12px 0',
              color: '#2d3748'
            }}>
              Google Gemini Ultra: منافس قوي في عالم الذكاء الاصطناعي
            </h3>
            <div style={{ 
              fontSize: '12px', 
              color: '#718096', 
              marginBottom: '15px',
              backgroundColor: '#f7fafc',
              padding: '6px 12px',
              borderRadius: '6px',
              display: 'inline-block'
            }}>
              12 يناير 2025
            </div>
            <p style={{ 
              fontSize: '16px', 
              lineHeight: '1.6', 
              margin: 0,
              color: '#4a5568'
            }}>
              Google تطلق Gemini Ultra مع قدرات متقدمة في معالجة النصوص والصور والبرمجة. النموذج يتفوق في مهام البحث والتحليل المعقد.
            </p>
          </article>

          <article style={{ 
            backgroundColor: 'white',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 15px rgba(0,0,0,0.06)',
            border: '1px solid #e8eaed'
          }}>
            <h3 style={{ 
              fontSize: '20px', 
              fontWeight: '600', 
              margin: '0 0 12px 0',
              color: '#2d3748'
            }}>
              الذكاء الاصطناعي في الطب: ثورة في التشخيص والعلاج
            </h3>
            <div style={{ 
              fontSize: '12px', 
              color: '#718096', 
              marginBottom: '15px',
              backgroundColor: '#f7fafc',
              padding: '6px 12px',
              borderRadius: '6px',
              display: 'inline-block'
            }}>
              10 يناير 2025
            </div>
            <p style={{ 
              fontSize: '16px', 
              lineHeight: '1.6', 
              margin: 0,
              color: '#4a5568'
            }}>
              أحدث التطورات في استخدام الذكاء الاصطناعي للتشخيص المبكر للأمراض، تطوير الأدوية، وتحسين رعاية المرضى في المستشفيات.
            </p>
          </article>

          <article style={{ 
            backgroundColor: 'white',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 15px rgba(0,0,0,0.06)',
            border: '1px solid #e8eaed'
          }}>
            <h3 style={{ 
              fontSize: '20px', 
              fontWeight: '600', 
              margin: '0 0 12px 0',
              color: '#2d3748'
            }}>
              Meta AI: الذكاء الاصطناعي في وسائل التواصل الاجتماعي
            </h3>
            <div style={{ 
              fontSize: '12px', 
              color: '#718096', 
              marginBottom: '15px',
              backgroundColor: '#f7fafc',
              padding: '6px 12px',
              borderRadius: '6px',
              display: 'inline-block'
            }}>
              8 يناير 2025
            </div>
            <p style={{ 
              fontSize: '16px', 
              lineHeight: '1.6', 
              margin: 0,
              color: '#4a5568'
            }}>
              Meta تدمج الذكاء الاصطناعي في Facebook وInstagram وWhatsApp لتحسين تجربة المستخدم وتقديم محتوى أكثر تخصيصاً وأماناً.
            </p>
          </article>

          <article style={{ 
            backgroundColor: 'white',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 15px rgba(0,0,0,0.06)',
            border: '1px solid #e8eaed'
          }}>
            <h3 style={{ 
              fontSize: '20px', 
              fontWeight: '600', 
              margin: '0 0 12px 0',
              color: '#2d3748'
            }}>
              الأخلاقيات في الذكاء الاصطناعي: التحديات والحلول
            </h3>
            <div style={{ 
              fontSize: '12px', 
              color: '#718096', 
              marginBottom: '15px',
              backgroundColor: '#f7fafc',
              padding: '6px 12px',
              borderRadius: '6px',
              display: 'inline-block'
            }}>
              6 يناير 2025
            </div>
            <p style={{ 
              fontSize: '16px', 
              lineHeight: '1.6', 
              margin: 0,
              color: '#4a5568'
            }}>
              مناقشة شاملة حول التحديات الأخلاقية للذكاء الاصطناعي، الخصوصية، التحيز في الخوارزميات، والحاجة لقوانين منظمة.
            </p>
          </article>

          <article style={{ 
            backgroundColor: 'white',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 15px rgba(0,0,0,0.06)',
            border: '1px solid #e8eaed'
          }}>
            <h3 style={{ 
              fontSize: '20px', 
              fontWeight: '600', 
              margin: '0 0 12px 0',
              color: '#2d3748'
            }}>
              الذكاء الاصطناعي في التعليم: مستقبل التعلم الشخصي
            </h3>
            <div style={{ 
              fontSize: '12px', 
              color: '#718096', 
              marginBottom: '15px',
              backgroundColor: '#f7fafc',
              padding: '6px 12px',
              borderRadius: '6px',
              display: 'inline-block'
            }}>
              4 يناير 2025
            </div>
            <p style={{ 
              fontSize: '16px', 
              lineHeight: '1.6', 
              margin: 0,
              color: '#4a5568'
            }}>
              كيف يثور الذكاء الاصطناعي في قطاع التعليم من خلال التعلم التكيفي، المساعدين الافتراضيين، وتخصيص المناهج لكل طالب.
            </p>
          </article>

          <article style={{ 
            backgroundColor: 'white',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 15px rgba(0,0,0,0.06)',
            border: '1px solid #e8eaed'
          }}>
            <h3 style={{ 
              fontSize: '20px', 
              fontWeight: '600', 
              margin: '0 0 12px 0',
              color: '#2d3748'
            }}>
              مستقبل الوظائف في عصر الذكاء الاصطناعي
            </h3>
            <div style={{ 
              fontSize: '12px', 
              color: '#718096', 
              marginBottom: '15px',
              backgroundColor: '#f7fafc',
              padding: '6px 12px',
              borderRadius: '6px',
              display: 'inline-block'
            }}>
              2 يناير 2025
            </div>
            <p style={{ 
              fontSize: '16px', 
              lineHeight: '1.6', 
              margin: 0,
              color: '#4a5568'
            }}>
              تحليل شامل لتأثير الذكاء الاصطناعي على سوق العمل، الوظائف المهددة، الوظائف الجديدة، والمهارات المطلوبة للمستقبل.
            </p>
          </article>

        </div>

        {/* AI Tools Section */}
        <section style={{ 
          marginTop: '50px', 
          paddingTop: '30px', 
          borderTop: '2px solid #e2e8f0'
        }}>
          <h3 style={{ 
            fontSize: '24px', 
            fontWeight: '600', 
            textAlign: 'center', 
            marginBottom: '25px',
            color: '#1a365d'
          }}>
            أدوات الذكاء الاصطناعي الشائعة
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
            gap: '15px' 
          }}>
            <div style={{ 
              padding: '20px', 
              backgroundColor: 'white',
              border: '2px solid #48bb78',
              borderRadius: '10px',
              textAlign: 'center'
            }}>
              <h4 style={{ margin: '0 0 10px 0', color: '#48bb78', fontSize: '16px' }}>ChatGPT</h4>
              <p style={{ margin: 0, fontSize: '14px', color: '#4a5568' }}>محادثات ذكية</p>
            </div>
            <div style={{ 
              padding: '20px', 
              backgroundColor: 'white',
              border: '2px solid #667eea',
              borderRadius: '10px',
              textAlign: 'center'
            }}>
              <h4 style={{ margin: '0 0 10px 0', color: '#667eea', fontSize: '16px' }}>Midjourney</h4>
              <p style={{ margin: 0, fontSize: '14px', color: '#4a5568' }}>إنشاء الصور</p>
            </div>
            <div style={{ 
              padding: '20px', 
              backgroundColor: 'white',
              border: '2px solid #ed8936',
              borderRadius: '10px',
              textAlign: 'center'
            }}>
              <h4 style={{ margin: '0 0 10px 0', color: '#ed8936', fontSize: '16px' }}>GitHub Copilot</h4>
              <p style={{ margin: 0, fontSize: '14px', color: '#4a5568' }}>مساعد البرمجة</p>
            </div>
            <div style={{ 
              padding: '20px', 
              backgroundColor: 'white',
              border: '2px solid #9f7aea',
              borderRadius: '10px',
              textAlign: 'center'
            }}>
              <h4 style={{ margin: '0 0 10px 0', color: '#9f7aea', fontSize: '16px' }}>Claude</h4>
              <p style={{ margin: 0, fontSize: '14px', color: '#4a5568' }}>مساعد ذكي</p>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer style={{ 
        background: 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)',
        color: 'white',
        marginTop: '60px', 
        padding: '30px 15px', 
        textAlign: 'center'
      }}>
        <p style={{ 
          margin: '0 0 15px 0', 
          fontSize: '16px',
          fontWeight: '500'
        }}>
          © 2025 تكنولوجيا 2025 - أخبار التطوير والتكنولوجيا
        </p>
        <div style={{ 
          fontSize: '14px', 
          marginBottom: '15px'
        }}>
          <a href="/about" style={{ 
            color: '#e2e8f0', 
            margin: '0 15px', 
            textDecoration: 'none'
          }}>
            من نحن
          </a>
          <a href="/privacy" style={{ 
            color: '#e2e8f0', 
            margin: '0 15px', 
            textDecoration: 'none'
          }}>
            سياسة الخصوصية
          </a>
          <a href="mailto:info@tech2025.com" style={{ 
            color: '#e2e8f0', 
            margin: '0 15px', 
            textDecoration: 'none'
          }}>
            اتصل بنا
          </a>
        </div>
        <p style={{ 
          margin: 0, 
          fontSize: '13px', 
          opacity: '0.8'
        }}>
          متوافق مع Free Basics • سريع وخفيف
        </p>
      </footer>
    </div>
  );
}
