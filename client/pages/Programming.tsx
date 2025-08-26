export default function Programming() {
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
          <a href="/" style={{ color: 'white', textDecoration: 'none' }}>تكنولوجيا 2025</a>
        </h1>
        <p style={{ 
          margin: 0, 
          fontSize: '16px', 
          opacity: '0.9',
          fontWeight: '400'
        }}>
          قسم البرمجة والتطوير
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
            backgroundColor: '#667eea', 
            color: 'white',
            textDecoration: 'none',
            borderRadius: '20px',
            fontSize: '14px',
            fontWeight: '500'
          }}>
            البرمجة
          </a>
          <a href="/ai" style={{ 
            padding: '8px 16px', 
            backgroundColor: '#f7fafc', 
            color: '#4a5568',
            textDecoration: 'none',
            borderRadius: '20px',
            fontSize: '14px',
            border: '1px solid #e2e8f0'
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
          borderBottom: '3px solid #667eea',
          paddingBottom: '15px'
        }}>
          أحدث مقالات البرمجة والتطوير
        </h2>

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
              fontSize: '22px', 
              fontWeight: '600', 
              margin: '0 0 12px 0',
              color: '#2d3748'
            }}>
              React 19: الميزات الجديدة والتحسينات المنتظرة
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
              margin: '0 0 15px 0',
              color: '#4a5568'
            }}>
              React 19 يجلب تحسينات كبيرة في الأداء مع Server Components المحسنة، Concurrent Features الجديدة، والتحكم الأفضل في إدارة الحالة. تعرف على أهم الميزات الجديدة.
            </p>
            <p style={{ 
              fontSize: '15px', 
              lineHeight: '1.6', 
              margin: 0,
              color: '#718096'
            }}>
              تشمل التحديثات أيضاً تحسينات في TypeScript support، وأدوات تطوير محسنة، وميزات جديدة لتحسين تجربة المطور.
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
              fontSize: '22px', 
              fontWeight: '600', 
              margin: '0 0 12px 0',
              color: '#2d3748'
            }}>
              Python 3.13: الجديد في عالم البايثون
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
              margin: '0 0 15px 0',
              color: '#4a5568'
            }}>
              إصدار Python 3.13 يحمل تحسينات في الأداء، ميزات جديدة في التعامل مع البيانات، وأدوات محسنة للتطوير. اكتشف ما الجديد.
            </p>
            <p style={{ 
              fontSize: '15px', 
              lineHeight: '1.6', 
              margin: 0,
              color: '#718096'
            }}>
              التحسينات تشمل سرعة أكبر في معالجة البيانات، دعم أفضل للـ async programming، وميزات جديدة في المكتبات الأساسية.
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
              fontSize: '22px', 
              fontWeight: '600', 
              margin: '0 0 12px 0',
              color: '#2d3748'
            }}>
              TypeScript 5.4: أحدث ميزات لغة البرمجة المحبوبة
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
              margin: '0 0 15px 0',
              color: '#4a5568'
            }}>
              TypeScript 5.4 يقدم تحسينات في النوع checking، أدوات محسنة للتطوير، ودعم أفضل للمشاريع الكبيرة والمعقدة.
            </p>
            <p style={{ 
              fontSize: '15px', 
              lineHeight: '1.6', 
              margin: 0,
              color: '#718096'
            }}>
              الميزات الجديدة تساعد المطورين في كتابة كود أكثر أماناً وفعالية مع تحسين تجربة التطوير بشكل عام.
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
              fontSize: '22px', 
              fontWeight: '600', 
              margin: '0 0 12px 0',
              color: '#2d3748'
            }}>
              Next.js 15: إطار العمل الأسرع للويب
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
              margin: '0 0 15px 0',
              color: '#4a5568'
            }}>
              Next.js 15 يحمل تحسينات جذرية في الأداء، App Router محسن، وميزات جديدة تجعل تطوير تطبيقات الويب أسرع وأسهل.
            </p>
            <p style={{ 
              fontSize: '15px', 
              lineHeight: '1.6', 
              margin: 0,
              color: '#718096'
            }}>
              التحديثات تشمل تحسين Image optimization، Server actions محسنة، ودعم أفضل للـ edge runtime.
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
              fontSize: '22px', 
              fontWeight: '600', 
              margin: '0 0 12px 0',
              color: '#2d3748'
            }}>
              Vue.js 3.4: التطوير السريع ��لواجهات التفاعلية
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
              margin: '0 0 15px 0',
              color: '#4a5568'
            }}>
              Vue.js 3.4 يقدم composition API محسن، reactivity أقوى، وأدوات تطوير محسنة لبناء تطبيقات ويب حديثة ومتجاوبة.
            </p>
            <p style={{ 
              fontSize: '15px', 
              lineHeight: '1.6', 
              margin: 0,
              color: '#718096'
            }}>
              التحسينات تركز على الأداء، سهولة التعلم، والمرونة في بناء تطبيقات من صغيرة إلى معقدة جداً.
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
              fontSize: '22px', 
              fontWeight: '600', 
              margin: '0 0 12px 0',
              color: '#2d3748'
            }}>
              أفضل ممارسات الـ Clean Code في 2025
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
              30 ديسمبر 2024
            </div>
            <p style={{ 
              fontSize: '16px', 
              lineHeight: '1.6', 
              margin: '0 0 15px 0',
              color: '#4a5568'
            }}>
              تعلم أحدث ممارسات كتابة الكود النظيف والقابل للصيانة. من التسمية السليمة إلى البنية المثلى للمشاريع البرمجية.
            </p>
            <p style={{ 
              fontSize: '15px', 
              lineHeight: '1.6', 
              margin: 0,
              color: '#718096'
            }}>
              نصائح عملية للمطورين لكتابة كود أفضل، تحسين الأداء، وتسهيل التطوير المستقبلي للمشاريع.
            </p>
          </article>

        </div>

        {/* Related Topics */}
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
            مواضيع ذات صلة
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '15px' 
          }}>
            <a href="/ai" style={{ 
              padding: '15px', 
              backgroundColor: 'white',
              border: '2px solid #48bb78',
              borderRadius: '10px',
              textAlign: 'center',
              textDecoration: 'none',
              color: '#48bb78'
            }}>
              <strong>الذكاء الاصطناعي</strong>
            </a>
            <a href="/security" style={{ 
              padding: '15px', 
              backgroundColor: 'white',
              border: '2px solid #ed8936',
              borderRadius: '10px',
              textAlign: 'center',
              textDecoration: 'none',
              color: '#ed8936'
            }}>
              <strong>ا��أمن السيبراني</strong>
            </a>
            <a href="/mobile" style={{ 
              padding: '15px', 
              backgroundColor: 'white',
              border: '2px solid #9f7aea',
              borderRadius: '10px',
              textAlign: 'center',
              textDecoration: 'none',
              color: '#9f7aea'
            }}>
              <strong>تطبيقات الهاتف</strong>
            </a>
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
