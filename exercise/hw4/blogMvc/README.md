練習 -- koa server 測試案例
請先安裝相關套件
npm i koa koa-logger koa-router koa-body --save
請執行 app.js 後，查看 http://localhost:3000/
node app.js
請安裝 mocha, supertest 後，用 mocha 對 app.js 進行測試。
npm i mocha --global
npm i supertest
mocha tddTest.js
