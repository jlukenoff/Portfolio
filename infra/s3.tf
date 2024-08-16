resource "aws_s3_bucket" "static_assets_bucket" {
  bucket = "jlukenoff-portfolio-static-assets"
}

resource "aws_s3_bucket_public_access_block" "static_assets_bucket_public_access_block" {
  bucket = aws_s3_bucket.static_assets_bucket.id

  block_public_acls       = true
  block_public_policy     = false
  ignore_public_acls      = true
  restrict_public_buckets = true
}

data "aws_iam_policy_document" "static_assets_bucket_policy" {
  statement {
    sid    = "PublicReadGetObject"
    effect = "Allow"
    principals {
      type        = "AWS"
      identifiers = ["*"]
    }
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.static_assets_bucket.arn}/public/*"]
  }
}

resource "aws_s3_bucket_policy" "static_assets_bucket_policy" {
  bucket = aws_s3_bucket.static_assets_bucket.id

  policy = data.aws_iam_policy_document.static_assets_bucket_policy.json
}

resource "aws_s3_bucket_cors_configuration" "static_assets_bucket_cors" {
  bucket = aws_s3_bucket.static_assets_bucket.id

  cors_rule {
    allowed_headers = ["*"]
    allowed_methods = ["GET"]
    allowed_origins = [local.portfolio_host]
    expose_headers  = ["ETag"]
    max_age_seconds = 3000
  }
}
