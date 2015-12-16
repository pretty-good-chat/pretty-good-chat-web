#Pretty Good Chat

End to end encrypted chat based on PGP, made with :green_heart: by :alien: !

This is the front-end of PGC. It uses Angular2 to provide awesome performances but mostly, we use Angular2 for the fun, because we love it !

##Stack
There are plenty of Angular2-seed out here, but [this one](https://github.com/ghpabs/angular2-seed) perfectly fits our needs (thanks [@ghpabs](https://github.com/ghpabs)).

**Included in the project :**
- [Gulp 4](http://gulpjs.com/)
- [Angular 2](https://angular.io/)
- [TypeScript](http://www.typescriptlang.org/)
- [Sass](http://sass-lang.com/)
- [Karma](http://karma-runner.github.io/)
- [Protractor](http://www.protractortest.org/)

##How does it work ?
- :boy: PGC first ask user to choose a username
- :key: If it has not been already taken, PGC will create in your browser a public key and a private key
- :white_check_mark: It will share your public key with the server so you don't have to sign in again (remember to backup public/private key)
- :closed_lock_with_key: All your messages are encrypted before you send it to the server, so nobody is aware of what you are writing

##How to contribute ?
New contributors are always welcome !  
Please have a look to the [issues](https://github.com/pretty-good-chat/pretty-good-chat-web/issues) of the project.

**You want to get involved and make a pull request ?**
1. Pick up an existing [issue](https://github.com/pretty-good-chat/pretty-good-chat-web/issues) or create your own to describe the problem/the new thing you want to implement
2. Fork this repo
3. Create your feature branch (`git checkout -b my-new-feature`)
4. Commit your changes (`git commit -am 'feat: Add some feature'`)  
Don't forget to follow coding/commit rules
5. Push to the branch (`git push origin my-new-feature`)
6. Create new *Pull Request*


## License (MIT)

```
Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```