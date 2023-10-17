import boto3

# Create a Cost Explorer client
client = boto3.client('ce')

# Define the date range and filters
start_date = "2023-10-01"
end_date = "2023-10-12"
response = client.get_cost_and_usage(
    TimePeriod={
        'Start': start_date,
        'End': end_date
    },
    Granularity='DAILY',
    Filter={
        'Dimensions': {
            'Key': 'SERVICE',
            'Values': ['Amazon SageMaker']
        }
    },
    Metrics=['BlendedCost', 'UnblendedCost', 'UsageQuantity']
)

# Print the cost data
for result in response['ResultsByTime']:
    print(f"{result['TimePeriod']['Start']} to {result['TimePeriod']['End']}: ${result['Total']['BlendedCost']['Amount']}")

