# Synservice

Combine responses from services initialized with different
parameters. Raw services need to be wrapped in initializing functions that
proxy methods and return parsed responses as objects.

## Example

From the AWS SDK for JavaScript:

```javascript
  var service = AWS.EC2;
  var parameterGroups = [{region: 'us-east-1'}, {region: 'us-west-2'}];
  var services = Synservice.new(service, parameterGroups);
  var combinedResponses = services.callMethod('describeVolumes');
```
