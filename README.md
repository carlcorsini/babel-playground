run this in your command line :

yarn install

yarn run babel-node -s -- index.js

the point of this is to try and create a mimic of React Component.

you can see I instantiated the ExtendsTest Class which uses the state = {} method from React

then I instantiated the ConstructorTest Class and passed in an argument of 'hey'

my theory was console logging both of these instantiations should return the exact same thing

which they did!
