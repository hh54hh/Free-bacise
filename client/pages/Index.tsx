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

      {/* Main Content */}
      <main style={{ 
        maxWidth: '900px', 
        margin: '0 auto', 
        padding: '30px 15px'
      }}>
        
        {/* Featured Article */}
        <article style={{ 
          backgroundColor: 'white',
          marginBottom: '35px', 
          padding: '30px',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          border: '1px solid #e8eaed'
        }}>
          <h2 style={{ 
            fontSize: '28px', 
            fontWeight: '700', 
            margin: '0 0 15px 0', 
            lineHeight: '1.3',
            color: '#1a365d',
            borderBottom: '3px solid #667eea',
            paddingBottom: '10px'
          }}>
            الذكاء الاصطناعي في 2025: ثورة تقنية جديدة
          </h2>
          <div style={{ 
            fontSize: '13px', 
            color: '#718096', 
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span style={{
              backgroundColor: '#e2e8f0',
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '500'
            }}>
              15 يناير 2025
            </span>
          </div>
          <p style={{ 
            fontSize: '18px', 
            lineHeight: '1.7', 
            margin: '0 0 20px 0',
            color: '#2d3748'
          }}>
            يشهد عا�� 2025 تطورات مذهلة في مجال الذكاء الاصطناعي، حيث تستمر النماذج اللغوية الكبيرة في التطور وتصبح أكثر دقة وفعالية.
          </p>
          <p style={{ 
            fontSize: '16px', 
            lineHeight: '1.7', 
            margin: 0,
            color: '#4a5568'
          }}>
            الشركات التقنية الكبرى تركز على تطوير ذكاء اصطناعي أكثر أماناً وشفافية، مع التركيز على الاستخدام الأخلاقي للتكنولوجيا.
          </p>
        </article>

        {/* Articles Grid */}
        <div style={{ display: 'grid', gap: '25px' }}>
          
          <article style={{ 
            backgroundColor: 'white',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 15px rgba(0,0,0,0.06)',
            border: '1px solid #e8eaed',
            transition: 'all 0.2s ease'
          }}>
            <h3 style={{ 
              fontSize: '20px', 
              fontWeight: '600', 
              margin: '0 0 12px 0',
              color: '#2d3748'
            }}>
              تطوير الويب في 2025: React 19 والميزات الجديدة
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
              fontSize: '15px', 
              lineHeight: '1.6', 
              margin: 0,
              color: '#4a5568'
            }}>
              React 19 يقدم ميزات جديدة مثل Server Components المحسنة، مما يجعل تطوير التطبيقات أسرع وأكثر كفاءة.
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
              الأمن السيبراني: التحديات الجديدة في عصر الذكاء الاصطناعي
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
              fontSize: '15px', 
              lineHeight: '1.6', 
              margin: 0,
              color: '#4a5568'
            }}>
              مع تطور الذكاء الاصطناعي، تظهر تحديات أمنية جديدة تتطلب استراتيجيات متقدمة لحماية البيانات.
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
              البرمجة بدون كود: مستقبل التطوير السريع
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
              5 يناير 2025
            </div>
            <p style={{ 
              fontSize: '15px', 
              lineHeight: '1.6', 
              margin: 0,
              color: '#4a5568'
            }}>
              منصات البرمجة بدون كود تتطور لتمكن غير المطورين من إنشاء تطبيقات معقدة بسهولة.
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
              البلوك تشين والعملات الرقمية: اتجاهات 2025
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
              3 يناير 2025
            </div>
            <p style={{ 
              fontSize: '15px', 
              lineHeight: '1.6', 
              margin: 0,
              color: '#4a5568'
            }}>
              تقنية البلوك تشين تشهد تطورات جديدة مع التركيز أكبر على الاستدامة البيئية.
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
              الحوسبة السحابية: الجيل الجديد من الخدمات
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
              1 يناير 2025
            </div>
            <p style={{ 
              fontSize: '15px', 
              lineHeight: '1.6', 
              margin: 0,
              color: '#4a5568'
            }}>
              خدمات الحوسبة السحابية الجديدة تقدم أداءً أعلى وتكاملاً أفضل مع الذكاء الاصطناعي.
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
              إنترنت الأشياء (IoT): ثورة الأجهزة المتصلة
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
              28 ديسمبر 2024
            </div>
            <p style={{ 
              fontSize: '15px', 
              lineHeight: '1.6', 
              margin: 0,
              color: '#4a5568'
            }}>
              إنترنت الأشياء يتوسع ليشمل المنازل والمدن الذكية مع تحسينات في الأمان والطاقة.
            </p>
          </article>

        </div>

        {/* Categories */}
        <section style={{ 
          marginTop: '50px', 
          paddingTop: '30px', 
          borderTop: '2px solid #e2e8f0'
        }}>
          <h2 style={{ 
            fontSize: '26px', 
            fontWeight: '700', 
            textAlign: 'center', 
            marginBottom: '30px',
            color: '#1a365d'
          }}>
            الأقسام
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '20px' 
          }}>
            <div style={{ 
              padding: '20px', 
              backgroundColor: 'white',
              border: '2px solid #667eea',
              borderRadius: '12px',
              textAlign: 'center',
              boxShadow: '0 2px 10px rgba(102,126,234,0.1)'
            }}>
              <h3 style={{ 
                fontWeight: '600', 
                margin: '0 0 8px 0', 
                fontSize: '18px',
                color: '#667eea'
              }}>
                البرمجة
              </h3>
              <p style={{ 
                fontSize: '14px', 
                margin: 0, 
                color: '#4a5568'
              }}>
                أحدث تقنيات التطوير
              </p>
            </div>
            
            <div style={{ 
              padding: '20px', 
              backgroundColor: 'white',
              border: '2px solid #48bb78',
              borderRadius: '12px',
              textAlign: 'center',
              boxShadow: '0 2px 10px rgba(72,187,120,0.1)'
            }}>
              <h3 style={{ 
                fontWeight: '600', 
                margin: '0 0 8px 0', 
                fontSize: '18px',
                color: '#48bb78'
              }}>
                الذكاء الاصطناعي
              </h3>
              <p style={{ 
                fontSize: '14px', 
                margin: 0, 
                color: '#4a5568'
              }}>
                مستقبل التكنولوجيا
              </p>
            </div>
            
            <div style={{ 
              padding: '20px', 
              backgroundColor: 'white',
              border: '2px solid #ed8936',
              borderRadius: '12px',
              textAlign: 'center',
              boxShadow: '0 2px 10px rgba(237,137,54,0.1)'
            }}>
              <h3 style={{ 
                fontWeight: '600', 
                margin: '0 0 8px 0', 
                fontSize: '18px',
                color: '#ed8936'
              }}>
                الأمن السيبراني
              </h3>
              <p style={{ 
                fontSize: '14px', 
                margin: 0, 
                color: '#4a5568'
              }}>
                حماية البيانات
              </p>
            </div>
            
            <div style={{ 
              padding: '20px', 
              backgroundColor: 'white',
              border: '2px solid #9f7aea',
              borderRadius: '12px',
              textAlign: 'center',
              boxShadow: '0 2px 10px rgba(159,122,234,0.1)'
            }}>
              <h3 style={{ 
                fontWeight: '600', 
                margin: '0 0 8px 0', 
                fontSize: '18px',
                color: '#9f7aea'
              }}>
                الابتكار
              </h3>
              <p style={{ 
                fontSize: '14px', 
                margin: 0, 
                color: '#4a5568'
              }}>
                أحدث الاختراعات
              </p>
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
            textDecoration: 'none',
            borderBottom: '1px solid transparent'
          }}>
            من نحن
          </a>
          <a href="/privacy" style={{ 
            color: '#e2e8f0', 
            margin: '0 15px', 
            textDecoration: 'none',
            borderBottom: '1px solid transparent'
          }}>
            سياسة الخصوصية
          </a>
          <a href="mailto:info@tech2025.com" style={{ 
            color: '#e2e8f0', 
            margin: '0 15px', 
            textDecoration: 'none',
            borderBottom: '1px solid transparent'
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
