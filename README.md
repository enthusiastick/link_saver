# LinkSaver

LinkSaver is a simple Ruby on Rails / React.js monolith, created to demonstrate some features of JavaScript testing using a Jasmine/Enzyme test suite run via Karma.

To get it up and running locally:

```bash
$ git clone git@github.com:enthusiastick/link_saver.git
$ cd link_saver
$ bundle install
$ rake db:create && rake db:migrate && rake db:seed
$ rails s
```

And then (in a separate terminal tab):

```bash
$ npm install
$ npm start
```

To see the JavaScript tests, you can run:

```bash
$ npm install
$ npm test
```
