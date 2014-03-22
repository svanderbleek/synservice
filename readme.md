# Synservice

Combine responses from JSON services initialized with different
parameters.

# Example

From the AWS JS SDK:

```javascript
  Synservice.new(AWS.ec2, [{region: 'us-east-1'}, {region:
'us-west-2'}]);
  combinedResponses = Synservice.callMethod('describeVolumes');
```
