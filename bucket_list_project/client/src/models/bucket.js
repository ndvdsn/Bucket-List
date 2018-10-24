const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Bucket = function (url) {
  this.url =  'http://localhost:3000/api/bucket';
  this.request = new Request(this.url);
};

Bucket.prototype.bindEvents = function () {

  PubSub.subscribe('BucketItem:item-delete-clicked', (evt) => {
    this.deleteListItem(evt.detail);
  });



  PubSub.subscribe('BucketFormView:form-submitted', (event) => {
    this.postListItem(event.detail);
  })

}

Bucket.prototype.postListItem = function (listItem) {

  this.request.post(listItem)
  .then((listItems) => {PubSub.publish('Bucket:data-loaded', listItems)
  console.log(listItem)
  })
  .catch(console.error);
};


Bucket.prototype.getData = function () {
  this.request.get()
  .then((bucket) => {
    PubSub.publish('Bucket:data-loaded', bucket);
    // console.log(bucket);
  })
  .catch(console.error);
};

Bucket.prototype.deleteListItem = function (bucketItemId) {
  this.request.delete(bucketItemId)
  .then((bucketItem) => {
    PubSub.publish('Bucket:data-loaded', bucketItem);
  })
  .catch(console.error);
}


module.exports = Bucket;
