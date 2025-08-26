export default function Security() {
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
        background: 'linear-gradient(135deg, #ed8936 0%, #dd6b20 100%)', 
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
          قسم الأمن السيبراني
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
            backgroundColor: '#ed8936', 
            color: 'white',
            textDecoration: 'none',
            borderRadius: '20px',
            fontSize: '14px',
            fontWeight: '500'
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
          borderBottom: '3px solid #ed8936',
          paddingBottom: '15px'
        }}>
          أحدث أخبار الأمن السيبراني
        </h2>

        {/* Security Alert */}
        <div style={{ 
          backgroundColor: '#fed7d7',
          border: '2px solid #e53e3e',
          borderRadius: '10px',
          padding: '20px',
          marginBottom: '30px'
        }}>
          <h3 style={{ 
            fontSize: '18px', 
            fontWeight: '600', 
            margin: '0 0 10px 0',
            color: '#c53030'
          }}>
            🚨 تحذير أمني هام
          </h3>
          <p style={{ 
            fontSize: '15px', 
            margin: 0,
            color: '#9b2c2c'
          }}>
            تم اكتشاف ثغرة أمنية جديدة في بعض المتصفحات. تأكد من تحديث متصفحك إلى أحدث إصدار.
          </p>
        </div>

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
              هجمات الفدية الإلكترونية في 2025: التهديدات الجديدة
            </h3>
            <div style={{ 
              fontSize: '12px', 
              color: '#718096', 
              marginBottom: '15px',
              backgroundColor: '#fff5f5',
              padding: '6px 12px',
              borderRadius: '6px',
              display: 'inline-block',
              border: '1px solid #fed7d7'
            }}>
              14 يناير 2025 • عاجل
            </div>
            <p style={{ 
              fontSize: '16px', 
              lineHeight: '1.6', 
              margin: '0 0 15px 0',
              color: '#4a5568'
            }}>
              تطور جديد في هجمات الفدية الإلكترونية يستهدف الشركات الصغيرة والمتوسطة. خبراء الأمن ينصحون بتطبيق بروتوكولات حماية محسنة.
            </p>
            <p style={{ 
              fontSize: '15px', 
              lineHeight: '1.6', 
              margin: 0,
              color: '#718096'
            }}>
              التقرير يشمل أحدث طرق الحماية، النسخ الاحتياطية الآمنة، وكيفية التعامل مع محاولات الاختراق.
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
              الذكاء الاصطناعي في الأمن السيبراني: سلاح ذو حدين
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
              كيف يستخدم الذكاء الاصطناعي لتعزيز الحماية السيبرانية، وفي نفس الوقت كيف يستغله المخترقون في هجماتهم المتطورة.
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
              التصيد الإلكتروني: طرق جديدة وكيفية التعرف عليها
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
              دليل شامل لأحدث طرق التصيد الإلكتروني، علامات التحذير، وكيفية حماية نفسك وشركتك من هذه الهجمات المتطورة.
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
              حماية البيانات الشخصية: قوانين GDPR الجديدة
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
              التحديثات الجديدة على قوانين حماية البيانات الأوروبية وتأثيرها على الشركات والمستخدمين في المنطقة العربية.
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
              أمن إنترنت الأشياء (IoT): التحديات والحلول
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
              مع انتشار الأجهزة الذكية، تزداد مخاطر الأمن السيبراني. تعرف على كيفية تأمين الأجهزة المنزلية الذكية وحماية شبكتك.
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
              التصديق المتعدد العوامل (MFA): ضرورة وليس اختياراً
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
              لماذا أصبح التصديق المتعدد العوامل ضرورة أساسية في 2025، وكيفية تطبيقه بشكل صحيح لحماية حساباتك الشخصية والمهنية.
            </p>
          </article>

        </div>

        {/* Security Tips */}
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
            نصائح أمنية سريعة
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '20px' 
          }}>
            <div style={{ 
              padding: '20px', 
              backgroundColor: '#f0fff4',
              border: '2px solid #48bb78',
              borderRadius: '10px'
            }}>
              <h4 style={{ 
                margin: '0 0 10px 0', 
                color: '#38a169', 
                fontSize: '16px',
                fontWeight: '600'
              }}>
                🔐 كلمات المرور القوية
              </h4>
              <p style={{ 
                margin: 0, 
                fontSize: '14px', 
                color: '#2f855a'
              }}>
                استخدم كلمات مرور معقدة وفريدة لكل حساب
              </p>
            </div>
            
            <div style={{ 
              padding: '20px', 
              backgroundColor: '#fffaf0',
              border: '2px solid #ed8936',
              borderRadius: '10px'
            }}>
              <h4 style={{ 
                margin: '0 0 10px 0', 
                color: '#dd6b20', 
                fontSize: '16px',
                fontWeight: '600'
              }}>
                📧 احذر من الرسائل المشبوهة
              </h4>
              <p style={{ 
                margin: 0, 
                fontSize: '14px', 
                color: '#c05621'
              }}>
                لا تنقر على روابط من مصادر غير موثوقة
              </p>
            </div>
            
            <div style={{ 
              padding: '20px', 
              backgroundColor: '#f0f8ff',
              border: '2px solid #667eea',
              borderRadius: '10px'
            }}>
              <h4 style={{ 
                margin: '0 0 10px 0', 
                color: '#5a67d8', 
                fontSize: '16px',
                fontWeight: '600'
              }}>
                🔄 التحديثات المستمرة
              </h4>
              <p style={{ 
                margin: 0, 
                fontSize: '14px', 
                color: '#4c51bf'
              }}>
                حدث نظام التشغيل والتطبيقات باستمرار
              </p>
            </div>
            
            <div style={{ 
              padding: '20px', 
              backgroundColor: '#faf5ff',
              border: '2px solid #9f7aea',
              borderRadius: '10px'
            }}>
              <h4 style={{ 
                margin: '0 0 10px 0', 
                color: '#805ad5', 
                fontSize: '16px',
                fontWeight: '600'
              }}>
              💾 النسخ الاحتياطية
              </h4>
              <p style={{ 
                margin: 0, 
                fontSize: '14px', 
                color: '#6b46c1'
              }}>
                اعمل نسخاً احتياطية منتظمة لبياناتك المهمة
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
