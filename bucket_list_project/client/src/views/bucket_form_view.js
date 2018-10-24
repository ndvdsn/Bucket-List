const PubSub = require('../helpers/pub_sub.js')

const BucketFormView = function (form) {
  this.form = form;

};

BucketFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  });
};

BucketFormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const newListItem = this.createListItem(evt.target);
  PubSub.publish('BucketFormView:form-submitted', newListItem);
  console.log(newListItem);
  event.target.reset();
}
BucketFormView.prototype.createListItem = function (form) {
  const newListItem = {listItem: form.listItem.value}
  return newListItem;
}

module.exports = BucketFormView;
