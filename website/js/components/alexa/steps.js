module.exports=[{
    title:"Signin/Signup",
    text:`
Sign in or create an Amazon developer account at [Amazon Developer Console](https://developer.amazon.com/home.html) 
    `
},{
    title:"Create Skill",
    text:`
In the Amazon Developer Console 
1. Choose <kbd>ALEXA</kbd> from the toolbar  
1. Under <kbd>Alexa Skills Kit</kbd> Click  <kbd>Get Started</kbd> 
1. In the upper right hand corner click <kbd>Add a New Skill</kbd>
`},{
    title:"Skill Information",
    text:`
Create a new skill using the following information:  

| Name | Value |
|------|-------|
| Skill Type | Customer Interaction Model |
| Language | English (U.S.) |
| Skill Name | <kbd>QnA Bot</kbd> |
| Invocation Name | <kbd>q and a</kbd> |

click Next
`},
{
    title:"Interaction Model",
    text:`
Fill in the following information:

| Name | Value |
|------|-------|
| Intent Schema |  copy and paste from button below |
| Custom Slot Type | <kbd>EXAMPLE_QUESTIONS</kbd> |
| Utterances |  copy and paste from button below |
| Sample Utterances | <kbd>Qna_intent {QnA_slot}</kbd> |

click Next
`},
{
    title:"Configuration",
    text:`
Fill in the following information:

| Name | Value |
|------|-------|
| Service Endpoint Type |  AWS Lambda ARN (Amazon Resource Name) |
| Endpoint | Choose <kbd>AWS Lambda ARN</kbd> |
| Lambda Arn |  copy and paste from button below | 

choose all other defaults

click next
`,
    buttons:[{
        text:"Copy Intent Schema to clipBoard",
        id:"IntentSchema",
        loading:false
    },{
        text:"Copy utterances to clipBoad",
        id:"Utterances",
        loading:false
    },{
        text:"Copy Lambda-Arn to clipBoard",
        id:"LambdaArn",
        loading:false
    }]
},
{
    title:"Test",
    optional:true,
    text:`
Congradulations! your skill is ready to be used. You will have to publish your skil inorder for people to use it outside of your account. 

You can use this page to test your new alexa skill or use the following: 

###### EchoSim
You can use the convenient [echosim.io](https://echosim.io/) site to test your bot.

###### Alexa Device 
To access your unpublished skill, register your Alexa device to the same account as your Amazon Developer account. If you have a device that is not registered to the right account, you can re-register it by following these directions: [Registering an Alexa-enabled Device for Testing](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/testing-an-alexa-skill#h2_register)

Ask questions in the form: *\"Alexa, ask Q and A, How do I use Q and A Bot?\"*  (Assuming your device wake word is 'Alexa')
`
},
{
    title:"Publishing",
    optional:true,
    text:`
If you want to publish your QnA skill, see [Submitting an Alexa Skill for Certification](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/publishing-an-alexa-skill)

Otherwise skip this step. You will be able to access the QnA skill from Alexa devices registered to your own Amazon account."
`},
{
    title:"Privacy and Compliance",
    optional:true,
    text:`
1. Choose 'no' for the privacy questions, 
2. check the export compliance agreement.
`}

]