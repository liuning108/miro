# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More
对于要构建的项目，这些文件必须以准确的文件名存在：

> public/index.html是页面模板；

>src/index.js是 JavaScript 入口点。

你可以在里面创建子目录src。为了更快地重建，srcwebpack 只处理内部的文件。你需要将任何 JS 和 CSS 文件放入src其中，否则 webpack 将看不到它们。

只有里面的文件public可以从public/index.html. 阅读以下关于使用 JavaScript 和 HTML 资源的说明。

但是，您可以创建更多顶级目录。它们不会包含在生产版本中，因此您可以将它们用于文档等内容。

如果您安装了 Git 并且您的项目不是较大存储库的一部分，则将初始化一个新存储库，从而生成一个额外的顶级.git目录。
