const PubSub = require('../helpers/pub_sub.js');

const BucketView = function (container) {
  this.container = container;
};

BucketView.prototype.render = function (bucketItems) {
  const bucketContainer = document.createElement('div');
  bucketContainer.id = 'full-bucket';

  const listItem = this.createHeading(bucketItems.listItem);
  bucketContainer.appendChild(listItem);

  const deleteButton = this.createDeleteButton(bucketItems._id);
  bucketContainer.appendChild(deleteButton);

  this.container.appendChild(bucketContainer);
}

BucketView.prototype.createHeading = function (textContent) {
  const heading = document.createElement('h6');
  heading.textContent = textContent;
  return heading;
};

BucketView.prototype.createDeleteButton = function (bucketItemId) {
  const button = document.createElement('button');
  button.classList.add('delete-btn');
  button.value = bucketItemId;

  button.addEventListener('click', (evt) => {
    PubSub.publish('BucketItem:item-delete-clicked', evt.target.value);
  });
  return button;
}
module.exports = BucketView;
