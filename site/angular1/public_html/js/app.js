(function(){
    var gems = [
{
    name: 'Dodecahedron',
    price:2.95,
    description: 'bla bla bla',
    canPurchase: true,
     images: {
        full:"img/3.jpg"
        
            }
    
},{
    name: 'Dodecahedron',
    price:2.95,
    description: 'bla bla bla',
    canPurchase: false,
    images: {
        full:"img/3.jpg"
        
            }
}];
var app = angular.module('store',[]);

app.controller('StoreController', function(){
    this.products = gems;
});




 app.controller('TabController', function(){
    this.tab = 1;

    this.setTab = function(newValue){
      this.tab = newValue;
      
    };

    this.isSet = function(tabName){
      return this.tab === tabName;
    };
  });


 
 
 
})();