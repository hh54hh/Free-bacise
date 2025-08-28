# دليل النشر

## النشر على GitHub Pages

### الطريقة الأولى: استخدام GitHub Actions (مستحسن)

1. **تفعيل GitHub Pages**:
   - اذهب لإعدادات المشروع في GitHub: `Settings > Pages`
   - اختر `GitHub Actions` كمصدر

2. **إنشاء ملف workflow**:
   ```bash
   mkdir -p .github/workflows
   ```

3. **إضافة ملف `.github/workflows/deploy.yml`**:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main, master ]

   jobs:
     deploy:
       runs-on: ubuntu-latest
       
       permissions:
         contents: read
         pages: write
         id-token: write

       steps:
       - name: Checkout
         uses: actions/checkout@v4

       - name: Setup Node.js
         uses: actions/setup-node@v4
         with:
           node-version: '18'
           cache: 'npm'

       - name: Install dependencies
         run: npm install

       - name: Build
         run: npm run build:gh-pages

       - name: Setup Pages
         uses: actions/configure-pages@v4

       - name: Upload artifact
         uses: actions/upload-pages-artifact@v3
         with:
           path: 'dist/spa'

       - name: Deploy to GitHub Pages
         id: deployment
         uses: actions/deploy-pages@v4
   ```

### الطريقة الثانية: الرفع اليدوي

1. **بناء المشروع**:
   ```bash
   npm run build:gh-pages
   ```

2. **رفع محتويات مجلد `dist/spa/`** للاستضافة

## النشر على Netlify

1. **ربط المشروع بـ Netlify**
2. **استخدام الإعدادات**:
   - Build command: `npm run build:client`
   - Publish directory: `dist/spa`

## المشاكل الشائعة وحلولها

### مشكلة الشاشة البيضاء
- تأكد أن ملف `404.html` موجود
- تأكد أن GitHub Pages مُفعل
- تأكد أن الفرع صحيح

### مشكلة 404 للروابط
- تأكد أن ملف `public/404.html` يحتوي على كود التوجيه
- أضف ملف `.nojekyll` في `public/`

### مشكلة المسارات
- تأكد أن `homepage` في `package.json` صحيح
- للدومين المخصص: `"homepage": "./"`
- للـ GitHub Pages: `"homepage": "./"`

## أوامر مفيدة

```bash
# تطوير محلي
npm run dev

# بناء للإنتاج
npm run build:client

# بناء لـ GitHub Pages
npm run build:gh-pages

# معاينة البناء
npm run preview
```
