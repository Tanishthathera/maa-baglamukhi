const express = require("express");
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require("express-session");
const mongoose=require("mongoose");
const swaggerUi = require('swagger-ui-express'); 
var port = process.env.PORT || 19010;

const config = require("./config");
const MONGODB_URI = config.mongodburi;
const swaggerDocument = require("./swaggerDocs.json");
const loginapis = require("./apis/loginapis.js");
const historyApis = require("./apis/historyApis.js");
const adminapis = require("./apis/adminapis.js");
const teamapis = require("./apis/teamapis.js");
const kycApis = require("./apis/kycApis.js");
const toolContentsApis = require("./apis/toolContentsApis.js");
const trade = require("./apis/redTokenOrderApis");
const adminService = require("./apis/adminServicesApi");
const userService = require("./apis/userServicesApi");
const orchestrator = require("./apis/orchestratorApi");
const userSidebar = require("./apis/userSidebarContentApis.js");
const RedCoinInternalTransfer = require("./apis/redCoinTransferApis.js");
const MessengerApi = require("./apis/messagingApis/messagingRouter.js")
const trolley = require("./apis/trolleyApis.js")
const fileUpload = require("./apis/fileUploadApis.js")
const contact = require('./apis/contactUs.js');
const bodyParser = require("body-parser");

var app = express();
app.use('/api-doc',swaggerUi.serve,swaggerUi.setup(swaggerDocument));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());
app.use(cors());
app.use(
  session({
    secret:  process.env.SESSION_SECRIT,
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 24*60*60*1000 }
  })
);
app.use(cookieParser("secretcode"));
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB!');
    console.error(error);
  });


app.listen(port, async () => {  
    console.log("Listen port",port);
});
app.use('/login', loginapis);
app.use('/admin', adminapis);
app.use('/team',teamapis);
app.use('/kyc',kycApis);
app.use('/tools',toolContentsApis);
app.use('/trade',trade);
app.use('/admin',adminService);
app.use('/user',userService);
app.use('/orchestrotor',orchestrator);
app.use('/sidebar-data',userSidebar);
app.use('/redcoin', RedCoinInternalTransfer)
app.use('/messaging', MessengerApi)
app.use('/trolley', trolley)
app.use('/fileupload', fileUpload)
app.use('/history',historyApis);
app.use('/contact',contact);
module.exports = app;