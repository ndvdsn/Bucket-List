const PubSub = require('../helpers/pub_sub.js');
const BucketView = require('./bucket_view.js');

const BucketGridView = function (container) {
  this.container = container;
};

BucketGridView.prototype.bindEvents = function () {
  PubSub.subscribe('Bucket:data-loaded', (evt) => {
    this.render(evt.detail);
    console.log(evt);
  });
};

BucketGridView.prototype.render = function (bucketItems) {
  this.container.innerHTML = '';
  const bucketView = new BucketView(this.container);
  bucketItems.forEach((item) => bucketView.render(item));
}


module.exports = BucketGridView;
