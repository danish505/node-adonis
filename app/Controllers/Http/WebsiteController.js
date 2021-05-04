'use strict'

const User = require("../../Models/User");
const Hash = use('Hash')

// adonis serve --dev

class WebsiteController {
    
    index({request,response,view}){
        response.send(view.render('index'));

    }

    signup_view({request,response,view}){
        response.send(view.render('signup'));
    }

    async register({request,response,view}){

        const user = new User();

        user.username = request.input('name');
        user.email = request.input('email');
        const safePassword = await Hash.make(request.input('password'))
        user.password = safePassword;

        await user.save();

        return response.redirect('/signup');

    }
    

}

module.exports = WebsiteController
