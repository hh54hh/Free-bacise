// Articles database for the website
export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  tags: string[];
}

export const articles: Article[] = [
  // Programming Articles
  {
    id: "react-19-features",
    title: "React 19: الميزات الجديدة والتحسينات المنتظرة",
    excerpt: "React 19 يقدم ميزات جديدة مثل Server Components المحسنة والـ Concurrent Features، مما يجعل تطوير التطبيقات أسرع وأكثر كفاءة.",
    content: `
      <h1>React 19: ثورة في تطوير الواجهات الأمامية</h1>
      
      <p>يأتي React 19 محملاً بتحسينات جذرية تهدف إلى تحسين تجربة المطور وأداء التطبيقات بشكل كبير.</p>
      
      <h2>الميزات الجديدة الرئيسية</h2>
      
      <h3>1. Server Components المحسنة</h3>
      <p>تم تحسين Server Components لتوفير أداء أفضل وتجربة تطوير أسهل. هذه المكونات تعمل على الخادم مما يقلل من حجم JavaScript المرسل للمتصفح.</p>
      
      <h3>2. Concurrent Features المتقدمة</h3>
      <p>ميزات التزامن الجديدة تسمح بتحديثات أكثر سلاسة وتجاوب أفضل للمستخدم، خاصة في التطبيقات المعقدة.</p>
      
      <h3>3. تحسينات Hydration</h3>
      <p>عملية الـ hydration أصبحت أسرع وأكثر كفاءة، مما يحسن من أوقات التحميل الأولي للصفحات.</p>
      
      <h2>تحسينات الأداء</h2>
      <p>React 19 يقدم تحسينات كبيرة في:</p>
      <ul>
        <li>سرعة البناء والتجميع</li>
        <li>استهلاك الذاكرة</li>
        <li>أوقات التحديث</li>
        <li>تحسين Bundle Size</li>
      </ul>
      
      <h2>التوافق والترحيل</h2>
      <p>React 19 يحافظ على التوافق العكسي مع معظم ميزات React 18، مع توفير أدوات ترحيل سهلة للمشاريع الموجودة.</p>
      
      <h2>الخلاصة</h2>
      <p>React 19 يمثل قفزة كبيرة في عالم تطوير واجهات الويب، ويقدم أدوات أقوى للمطورين لبناء تطبيقات أسرع وأكثر كفاءة.</p>
    `,
    category: "programming",
    date: "2025-01-10",
    readTime: "5 دقائق",
    tags: ["React", "JavaScript", "تطوير ويب"]
  },

  // AI Articles
  {
    id: "chatgpt-5-release",
    title: "ChatGPT-5: الجيل الجديد من الذكاء الاصطناعي التحادثي",
    excerpt: "OpenAI تكشف عن ChatGPT-5 مع قدرات محسنة بشكل كبير في فهم السياق، التفكير المنطقي، والتعامل مع المهام المعقدة.",
    content: `
      <h1>ChatGPT-5: ثورة جديدة في الذكاء الاصطناعي</h1>
      
      <p>مع إطلاق ChatGPT-5، تدخل OpenAI بنا إلى عصر جديد من الذكاء الاصطناعي التحادثي المتقدم.</p>
      
      <h2>الميزات الثورية الجديدة</h2>
      
      <h3>1. فهم أعمق للسياق</h3>
      <p>ChatGPT-5 يستطيع فهم السياق بشكل أعمق ومتابعة المحادثات الطويلة والمعقدة بدقة أكبر.</p>
      
      <h3>2. التفكير المنطقي المتقدم</h3>
      <p>قدرات محسنة في التفكير المنطقي وحل المشاكل المعقدة خطوة بخطوة.</p>
      
      <h3>3. معالجة متعددة الوسائط</h3>
      <p>دعم أفضل للصور، الفيديو، والملفات الصوتية مع فهم أعمق للمحتوى البصري.</p>
      
      <h2>التحسينات في الأداء</h2>
      <ul>
        <li>سرعة استجابة أكبر</li>
        <li>دقة أعلى في الإجابات</li>
        <li>استهلاك طاقة أقل</li>
        <li>دعم أفضل للغات المتعددة</li>
      </ul>
      
      <h2>الأمان والأخلاقيات</h2>
      <p>تركيز أكبر على الأمان مع نظام قيود محسن لمنع المحتوى الضار أو المضلل.</p>
      
      <h2>الخلاصة</h2>
      <p>ChatGPT-5 يمثل قفزة كبيرة في عالم الذكاء الاصطناعي ويقربنا أكثر من تحقيق الذكاء الاصطناعي العام.</p>
    `,
    category: "ai",
    date: "2025-01-15",
    readTime: "6 دقائق",
    tags: ["ChatGPT", "ذكاء اصطناعي", "OpenAI"]
  }
];

// Generate additional articles to reach 100+
const generateMoreArticles = (): Article[] => {
  const moreArticles: Article[] = [];
  
  // Programming articles
  const programmingTopics = [
    "تحسينات TypeScript الجديدة", "Vue.js 3.5 والميزات المتقدمة", 
    "أفضل ممارسات Node.js", "Next.js 15 والتطوير الحديث",
    "Angular 18 وتحديثاته", "Docker في التطوير الحديث",
    "GraphQL مقابل REST API", "تطوير PWA المتقدمة",
    "WebAssembly في 2025", "Rust في تطوير الويب"
  ];

  // AI articles
  const aiTopics = [
    "الذكاء الاصطناعي في التعليم", "التعلم الآلي للمبتدئين", 
    "الشبكات العصبية العميقة", "معالجة اللغات الطبيعية",
    "رؤية الحاسوب الحديثة", "الذكاء الاصطناعي الطبي",
    "أخلاقيات الذكاء الاصطناعي", "AutoML وأتمتة التعلم",
    "الذكاء الاصطناعي المولد", "التحيز في خوارزميات الذكاء الاصطناعي"
  ];

  // Security articles
  const securityTopics = [
    "الأمان في السحابة", "حماية API من الهجمات",
    "التصيد الإلكتروني الحديث", "أمان إنترنت الأشياء",
    "الهندسة الاجتماعية", "تقنيات التشفير المتقدمة",
    "أمان تطبيقات الويب", "مراقبة الشبكات الأمنية",
    "إدارة الهوية والوصول", "أمان الأجهزة المحمولة"
  ];

  // Mobile articles
  const mobileTopics = [
    "React Native الجديد", "تطوير iOS بـ SwiftUI",
    "Kotlin Multiplatform", "تصميم UX للتطبيقات",
    "أداء التطبيقات المحمولة", "أمان التطبيقات المحمولة",
    "متاجر التطبيقات 2025", "الواقع المعزز في التطبيقات",
    "إشعارات التطبيقات الذكية", "اختبار التطبيقات المحمولة"
  ];

  let idCounter = 100;

  // Generate programming articles
  programmingTopics.forEach(topic => {
    for (let i = 1; i <= 10; i++) {
      moreArticles.push({
        id: `prog-${idCounter++}`,
        title: `${topic} - الجزء ${i}`,
        excerpt: `دليل شامل حول ${topic} يغطي أحدث التطورات والممارسات في عالم البرمجة والتطوير.`,
        content: `
          <h1>${topic} - دليل تفصيلي</h1>
          <p>موضوع ${topic} من المواضيع المهمة في عالم البرمجة الحديثة.</p>
          <h2>المقدمة</h2>
          <p>في هذا المقال نستكشف ${topic} بالتفصيل مع أمثلة عملية.</p>
          <h2>الأساسيات</h2>
          <p>فهم الأساسيات أمر ضروري للتقدم في ${topic}.</p>
          <h2>التطبيقات العملية</h2>
          <ul><li>مثال تطبيقي أول</li><li>مثال تطبيقي ثاني</li><li>حالات استخدام متقدمة</li></ul>
          <h2>الخلاصة</h2>
          <p>${topic} يفتح آفاقاً جديدة في عالم التطوير.</p>
        `,
        category: "programming",
        date: `2025-01-${(i % 15) + 1}`,
        readTime: `${(i % 8) + 3} دقائق`,
        tags: [topic.split(' ')[0], "برمجة"]
      });
    }
  });

  // Generate AI articles
  aiTopics.forEach(topic => {
    for (let i = 1; i <= 10; i++) {
      moreArticles.push({
        id: `ai-${idCounter++}`,
        title: `${topic} - الجزء ${i}`,
        excerpt: `استكشاف عميق لموضوع ${topic} وتطبيقاته في عالم الذكاء الاصطناعي الحديث.`,
        content: `
          <h1>${topic} - نظرة شاملة</h1>
          <p>${topic} يمثل مجالاً مهماً من مجالات الذكاء الاصطناعي.</p>
          <h2>النظريات الأساسية</h2>
          <p>الفهم النظري لـ ${topic} ضروري للتطبيق العملي.</p>
          <h2>التقنيات المستخدمة</h2>
          <p>أحدث التقنيات في مجال ${topic}.</p>
          <h2>المستقبل والتطورات</h2>
          <p>نظرة على مستقبل ${topic} والتطورات المنتظرة.</p>
        `,
        category: "ai",
        date: `2025-01-${(i % 15) + 1}`,
        readTime: `${(i % 8) + 3} دقائق`,
        tags: [topic.split(' ')[0], "ذكاء اصطناعي"]
      });
    }
  });

  // Generate security articles
  securityTopics.forEach(topic => {
    for (let i = 1; i <= 10; i++) {
      moreArticles.push({
        id: `sec-${idCounter++}`,
        title: `${topic} - الجزء ${i}`,
        excerpt: `دليل أمني شامل حول ${topic} وكيفية تطبيق أفضل ممار��ات الحماية.`,
        content: `
          <h1>${topic} - دليل الأمان</h1>
          <p>الأمان في ${topic} أمر بالغ الأهمية في العصر الرقمي.</p>
          <h2>التهديدات الحالية</h2>
          <p>نظرة على التهديدات الأمنية المتعلقة بـ ${topic}.</p>
          <h2>طرق الحماية</h2>
          <p>أفضل الممارسات لحماية ${topic}.</p>
          <h2>نصائح أمنية</h2>
          <ul><li>نصيحة أمنية أولى</li><li>نصيحة أمنية ثانية</li><li>إجراءات الطوارئ</li></ul>
        `,
        category: "security",
        date: `2025-01-${(i % 15) + 1}`,
        readTime: `${(i % 8) + 3} دقائق`,
        tags: [topic.split(' ')[0], "أمن سيبراني"]
      });
    }
  });

  // Generate mobile articles
  mobileTopics.forEach(topic => {
    for (let i = 1; i <= 10; i++) {
      moreArticles.push({
        id: `mobile-${idCounter++}`,
        title: `${topic} - الجزء ${i}`,
        excerpt: `كل ما تحتاج معرفته حول ${topic} في عالم تطوير التطبيقات المحمولة.`,
        content: `
          <h1>${topic} - تطوير التطبيقات</h1>
          <p>${topic} يلعب دوراً مهماً في تطوير التطبيقات الحديثة.</p>
          <h2>منصات التطوير</h2>
          <p>أفضل منصات التطوير لـ ${topic}.</p>
          <h2>تصميم تجربة المستخدم</h2>
          <p>أهمية تصميم UX في ${topic}.</p>
          <h2>الأداء والتحسين</h2>
          <p>تحسين الأداء في ${topic}.</p>
        `,
        category: "mobile",
        date: `2025-01-${(i % 15) + 1}`,
        readTime: `${(i % 8) + 3} دقائق`,
        tags: [topic.split(' ')[0], "تطبيقات"]
      });
    }
  });

  return moreArticles;
};

// Combine all articles
export const allArticles = [...articles, ...generateMoreArticles()];

// Helper functions
export const getArticleById = (id: string): Article | undefined => {
  return allArticles.find(article => article.id === id);
};

export const getArticlesByCategory = (category: string): Article[] => {
  return allArticles.filter(article => article.category === category);
};

export const getAllCategories = (): string[] => {
  return Array.from(new Set(allArticles.map(article => article.category)));
};
