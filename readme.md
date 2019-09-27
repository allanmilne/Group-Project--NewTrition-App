# NewTrition

### An educational app created to help educate people of all ages on nutrition and to discover the key nutrient levels contained within their food using the Nutritionix Api (https://www.nutritionix.com/business/api).

## Our Brief

### MVP:
A user should be able to…

- View nutritional content.
- Be able to interact with the page to move through different sections of content.

### Extensions:
- To Use an API to bring in content or a database to store information.
- Use charts or external components to display information dynamically to the page.

## Installation After Pulling from GitHub

### In Server Directory:
Before the program will work you will need to install the following packages:

- node-fetch: ```npm install node-fetch --save```
- dotenv: ```npm install dotenv```
- parser: ```npm install body-parser```
- cors: ```npm install cors```
- express: ```npm install express```
- nodemon: ```npm i --save-dev nodemon```

You will also have to create a .env in the group_project_js folder containing the api key and api id, as per the following:

```
API_KEY=
API_ID=
```

To run the server, run the script below in your terminal whilst in the server directory:

- run nodemon script: ```npm run server:dev```

### In Client Directory:
Before the program will work you will need to install the following packages:

- node modules: ```npm install```
- tiny-tabs: ```npm install --save vue-tiny-tabs```
- highcharts: ```npm install --save highcharts```
- slider: ```npm install --save vue-custom-range-slider```

To run the client, run the script below in your terminal whilst in the client directory:

- ```npm run serve```
