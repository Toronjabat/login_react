BUCKET=toronjabat

aws s3 cp ./src/components s3://$BUCKET --recursive --acl components-read