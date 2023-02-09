<!--Generated by WRITEME on 2023-01-25 00:17:27.197423 (UTC)-->
# Amazon S3 code examples for the SDK for SAP ABAP

## Overview

Shows how to use the AWS SDK for SAP ABAP to work with Amazon Simple Storage Service.

<!--custom.overview.start-->
<!--custom.overview.end-->

*Amazon S3 is storage for the internet. You can use Amazon S3 to store and retrieve any amount of data at any time, from anywhere on the web.*

## ⚠ Important

* Running this code might result in charges to your AWS account.
* Running the tests might result in charges to your AWS account.
* We recommend that you grant your code least privilege. At most, grant only the minimum permissions required to perform the task. For more information, see [Grant least privilege](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#grant-least-privilege).
* This code is not tested in every AWS Region. For more information, see [AWS Regional Services](https://aws.amazon.com/about-aws/global-infrastructure/regional-product-services).

<!--custom.important.start-->
<!--custom.important.end-->

## Code examples
### Single actions

Code excerpts that show you how to call individual service functions.

* [Copy an object from one bucket to another](zcl_aws1_s3_actions.clas.abap#L60) (`CopyObject`)
* [Create a bucket](zcl_aws1_s3_actions.clas.abap#L84) (`CreateBucket`)
* [Delete an empty bucket](zcl_aws1_s3_actions.clas.abap#L106) (`DeleteBucket`)
* [Delete an object](zcl_aws1_s3_actions.clas.abap#L127) (`DeleteObject`)
* [Get an object from a bucket](zcl_aws1_s3_actions.clas.abap#L147) (`GetObject`)
* [List objects in a bucket](zcl_aws1_s3_actions.clas.abap#L171) (`ListObjects`)
* [Upload an object to a bucket](zcl_aws1_s3_actions.clas.abap#L191) (`PutObject`)

### Scenarios

Code examples that show you how to accomplish a specific task by calling multiple
functions within the same service.

* [Get started with buckets and objects](zcl_aws1_s3_scenario.clas.abap) 

## Run the examples

### Prerequisites

For prerequisites, see the [README](../../README.md#Prerequisites) in the `sap-abap` folder.

<!--custom.prerequisites.start-->
<!--custom.prerequisites.end-->

### Instructions

<!--custom.instructions.start-->
<!--custom.instructions.end-->


#### Get started with buckets and objects

This example shows you how to do the following:

* Create a bucket.
* Upload a file to the bucket.
* Download an object from a bucket.
* Copy an object to a subfolder in a bucket.
* List the objects in a bucket.
* Delete the objects in a bucket.
* Delete a bucket.

<!--custom.scenarios.s3_Scenario_GettingStarted.start-->
<!--custom.scenarios.s3_Scenario_GettingStarted.end-->

### Tests

⚠ Running tests might result in charges to your AWS account.

To find instructions for running these tests, see the [README](../../README.md#Tests)
in the `sap-abap` folder.

<!--custom.tests.start-->
<!--custom.tests.end-->

## Additional resources

* [Amazon S3 User Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html)
* [Amazon S3 API Reference](https://docs.aws.amazon.com/AmazonS3/latest/API/Welcome.html)
* [SDK for SAP ABAP Amazon S3 reference](https://docs.aws.amazon.com/sdk-for-sap-abap/v1/api/latest/s3/index.html)

<!--custom.resources.start-->
<!--custom.resources.end-->

---

Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.

SPDX-License-Identifier: Apache-2.0