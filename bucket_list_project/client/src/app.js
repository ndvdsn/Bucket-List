const Bucket = require('./models/bucket.js')
const BucketGridView = require('./views/bucket_grid_view.js');
const BucketFormView = require('./views/bucket_form_view.js');

document.addEventListener('DOMContentLoaded', () => {

  const bucketContainer = document.querySelector('#full-bucket')
  const bucketGridView = new BucketGridView(bucketContainer);
  bucketGridView.bindEvents();

  const form = document.querySelector('#bucket-form')
  const bucketFormView = new BucketFormView(form)
  bucketFormView.bindEvents();

  const bucket = new Bucket();
  bucket.bindEvents();
  bucket.getData();


})
