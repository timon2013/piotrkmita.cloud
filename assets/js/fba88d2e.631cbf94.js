"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[7063],{2056:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>u});const o=JSON.parse('{"id":"SystemManager/Example Cloud Formation","title":"Gotowy stack w Cloud Formation do uruchomienia \u015brodowiska z Session Manager.","description":"","source":"@site/docs/SystemManager/06-Example Cloud Formation.md","sourceDirName":"SystemManager","slug":"/SystemManager/Example Cloud Formation","permalink":"/docs/SystemManager/Example Cloud Formation","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/SystemManager/06-Example Cloud Formation.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Wnioski","permalink":"/docs/SystemManager/conclusion"},"next":{"title":"Tutorials","permalink":"/docs/tutorials"}}');var a=t(4848),s=t(8453);const r={},i="Gotowy stack w Cloud Formation do uruchomienia \u015brodowiska z Session Manager.",c={},u=[];function l(e){const n={code:"code",h1:"h1",header:"header",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"gotowy-stack-w-cloud-formation-do-uruchomienia-\u015brodowiska-z-session-manager",children:"Gotowy stack w Cloud Formation do uruchomienia \u015brodowiska z Session Manager."})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'\n# Create: aws cloudformation create-stack --stack-name myteststack --template-body file://CF.yml --capabilities CAPABILITY_NAMED_IAM\n# Update: aws cloudformation update-stack --stack-name myteststack --template-body file://CF.yml --capabilities CAPABILITY_NAMED_IAM\n# Update Session Manager Preferences too: aws cloudformation update-stack --stack-name myteststack --template-body file://CF.yml --capabilities CAPABILITY_NAMED_IAM  --parameters ParameterKey=UpdateSMPreferences,ParameterValue=true\n# SSM Preferences update and S3 cleanup during bucket removal: aws cloudformation update-stack --stack-name myteststack --template-body file://CF.yml --capabilities CAPABILITY_NAMED_IAM  --parameters ParameterKey=UpdateSMPreferences,ParameterValue=true ParameterKey=EmptyBucketBeforeDelete,ParameterValue=true \n\nAWSTemplateFormatVersion: \'2010-09-09\'\nDescription: \'AWS CloudFormation added condition\'\nParameters:\n    IsolatedSolution: #if you want isolated solution, private\n      Type: String\n      Default: false\n    AssignPublicIP:\n      Type: String\n      Default: true\n    EmptyBucketBeforeDelete:\n      Type: String\n      Default: false\n    UpdateSMPreferences:\n      Type: String\n      Default: false\n    LambdaMethodUpdateSMP:\n      Type: String\n      Default: true #true for lambda and false for ec2\n    ProjectName:\n      Type: String\n      Default: ssmsession2\n    KMSId:\n      Type: String\n      Default: key-default-2\n    InstanceType:\n      Description: WebServer EC2 instance type\n      Type: String\n      Default: t2.small\n    SSHLocation:\n      Description: The IP address range that can be used to SSH to the EC2 instances\n      Type: String\n      MinLength: \'9\'\n      MaxLength: \'18\'\n      Default: 0.0.0.0/0\n      AllowedPattern: "(\\\\d{1,3})\\\\.(\\\\d{1,3})\\\\.(\\\\d{1,3})\\\\.(\\\\d{1,3})/(\\\\d{1,2})"\n      ConstraintDescription: must be a valid IP CIDR range of the form x.x.x.x/x.\nConditions:\n  IsolatedSolution: !Equals [!Ref IsolatedSolution, true]\n  IsNotIsolatedSolution: !Not [Condition: IsolatedSolution]\n  EmptyBucket: !Equals [!Ref EmptyBucketBeforeDelete, true]\n  UpdateSMP: !Equals\n    - !Ref UpdateSMPreferences\n    - true\n  UpdateSMPLambda: !Equals\n    - !Ref LambdaMethodUpdateSMP\n    - true\n  UpdateSMPEC2: !Equals\n    - !Ref LambdaMethodUpdateSMP\n    - false\n  CreateResourcesLambda: !And\n    - !Condition UpdateSMP\n    - !Condition UpdateSMPLambda\n  CreateResourcesEC2: !And\n    - !Condition UpdateSMP\n    - !Condition UpdateSMPEC2\nMappings:\n  RegionMap: \n      eu-central-1: \n        HVM64: "ami-0a261c0e5f51090b1"\n        VPCCidrBlock: "10.0.0.0/16"\n        VPCSubnetA: "10.0.0.0/24"\n        VPCSubnetAAZ: "eu-central-1a"\n        LogGroupNameSessionManager: EC2SessionManager-Logs3\n        PrefixBucketS3: logs-sessionmanager #Bucket name should not contain uppercase characters\n      us-east-1:\n        HVM64: "ami-0aa7d40eeae50c9a9"\n        VPCCidrBlock: "10.0.1.0/16"\n        VPCSubnetA: "10.0.1.0/24"\n        VPCSubnetAAZ: "us-east-1a"\n        LogGroupNameSessionManager: EC2SessionManagerUS-Logs3\n        PrefixBucketS3: logs-sessionmanager2 #Bucket name should not contain uppercase characters\n\nResources:\n    VPC:\n      Type: AWS::EC2::VPC\n      Properties:\n        CidrBlock: !FindInMap [ RegionMap, !Ref \'AWS::Region\', VPCCidrBlock]\n        EnableDnsSupport: \'true\'\n        EnableDnsHostnames: \'true\'\n    SubnetA:\n      Type: AWS::EC2::Subnet\n      Properties:\n        VpcId: !Ref VPC\n        MapPublicIpOnLaunch: !Ref AssignPublicIP #true #public IP\n        CidrBlock: !FindInMap [ RegionMap, !Ref \'AWS::Region\', VPCCidrBlock]\n        AvailabilityZone: !FindInMap [ RegionMap, !Ref \'AWS::Region\', VPCSubnetAAZ]\n    InstanceSecurityGroup:\n      Type: \'AWS::EC2::SecurityGroup\'\n      Properties:\n        GroupDescription: Enable SSH access via port 22\n        VpcId: !Ref VPC\n        SecurityGroupIngress:\n          - \n            IpProtocol: tcp\n            FromPort: \'22\'\n            ToPort: \'22\'\n            CidrIp: !Ref SSHLocation\n          - IpProtocol: tcp\n            FromPort: \'443\'\n            ToPort: \'443\'\n            CidrIp: !FindInMap [ RegionMap, !Ref \'AWS::Region\', VPCCidrBlock]\n    InternetGateway:\n      Type: AWS::EC2::InternetGateway\n      Condition: IsNotIsolatedSolution\n      Properties:\n        Tags:\n        - Key: stack\n          Value: production\n    VPCGatewayAttachment:\n      Type: AWS::EC2::VPCGatewayAttachment\n      Condition: IsNotIsolatedSolution\n      Properties: \n        InternetGatewayId: !Ref InternetGateway\n        VpcId: !Ref VPC\n    RouteTable:\n      Type: AWS::EC2::RouteTable\n      Properties:\n        VpcId: !Ref VPC\n    Route:\n      Type: AWS::EC2::Route\n      Condition: IsNotIsolatedSolution\n      Properties:\n        RouteTableId: !Ref RouteTable\n        DestinationCidrBlock: 0.0.0.0/0\n        GatewayId: !Ref InternetGateway\n    SubnetRouteTableAssociation:\n      Type: AWS::EC2::SubnetRouteTableAssociation\n      Properties:\n        SubnetId: !Ref SubnetA\n        RouteTableId: !Ref RouteTable\n    EC2Instance:\n        Type: \'AWS::EC2::Instance\'\n        Properties:\n            InstanceType: !Ref InstanceType\n            IamInstanceProfile: !Ref InstanceProfile\n            NetworkInterfaces: \n              - AssociatePublicIpAddress: !Ref AssignPublicIP #"true"\n                DeviceIndex: "0"\n                GroupSet: \n                  - !Ref InstanceSecurityGroup\n                SubnetId: !Ref SubnetA\n            ImageId: !FindInMap [ RegionMap, !Ref \'AWS::Region\', HVM64 ]\n    InstanceRole:\n      Type: "AWS::IAM::Role"\n      Properties: \n        AssumeRolePolicyDocument: \n          Version: "2012-10-17"\n          Statement: \n            - \n              Effect: "Allow"\n              Principal: \n                Service: \n                  - "ec2.amazonaws.com"\n              Action: \n                - "sts:AssumeRole"\n        Path: "/"\n        ManagedPolicyArns:\n          - arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore\n    RolePolicies: \n      Type: "AWS::IAM::Policy"\n      Properties: \n        PolicyName: !Join \n          - \'\'\n          -\n            - !FindInMap [ RegionMap, !Ref \'AWS::Region\', LogGroupNameSessionManager ]\n            - \'policy\'\n        PolicyDocument: \n          Version: "2012-10-17"\n          Statement: \n            - Effect: "Allow"\n              Action:\n                - \'logs:CreateLogStream\'\n                - \'logs:PutLogEvents\'\n                - \'logs:DescribeLogGroups\'\n                - \'logs:DescribeLogStreams\'\n              Resource: !Sub \'arn:aws:logs:${AWS::Region}:${AWS::AccountId}:log-group:*\'\n            - Effect: "Allow"\n              Action:\n                - \'kms:Decrypt\'\n              Resource: !GetAtt KMSKey.Arn\n            - Effect: "Allow"\n              Action:\n                - \'kms:GenerateDataKey\'\n              Resource: \'*\'\n            - Effect: "Allow"\n              Action:\n                - \'s3:PutObject\'\n              Resource: !Sub ${S3BucketUserFiles.Arn}/*\n            - Effect: "Allow"\n              Action:\n                - "s3:GetEncryptionConfiguration"\n              Resource: "*"\n        Roles: \n          - !Ref InstanceRole\n    InstanceProfile: \n      Type: "AWS::IAM::InstanceProfile"\n      Properties: \n        Path: "/"\n        Roles: \n          - !Ref InstanceRole\n    LogGroup: \n      Type: AWS::Logs::LogGroup\n      # DependsOn: KMSKey\n      Properties: \n        LogGroupName: !FindInMap [ RegionMap, !Ref \'AWS::Region\', LogGroupNameSessionManager]\n        RetentionInDays: 7\n        KmsKeyId: !GetAtt KMSKey.Arn\n\n    S3BucketUserFiles:\n      Type: \'AWS::S3::Bucket\'\n      Properties:\n        BucketEncryption:\n          ServerSideEncryptionConfiguration: \n            - BucketKeyEnabled: true\n              ServerSideEncryptionByDefault: \n                SSEAlgorithm: \'aws:kms\'\n                KMSMasterKeyID: !GetAtt KMSKey.Arn\n              \n        BucketName: !Join\n          - \'\'\n          -\n            - !FindInMap [ RegionMap, !Ref \'AWS::Region\', PrefixBucketS3]\n            - !Select [2, !Split [\'/\', !Ref AWS::StackId]]\n        AccessControl: Private\n        PublicAccessBlockConfiguration:\n          BlockPublicAcls: true\n          BlockPublicPolicy: true\n          IgnorePublicAcls: true\n          RestrictPublicBuckets: true\n    KMSKey:\n      Type: \'AWS::KMS::Key\'\n      Properties:\n        Description: An example symmetric encryption KMS key\n        EnableKeyRotation: true\n        PendingWindowInDays: 20\n        KeyPolicy:\n          Version: 2012-10-17\n          Id: !Ref KMSId\n          Statement:\n            - Sid: Enable IAM User Permissions\n              Effect: Allow\n              Principal:\n                AWS: !Join \n                  - \'\'\n                  - - \'arn:aws:iam::\'\n                    - !Ref \'AWS::AccountId\'\n                    - \':root\'\n              Action: \'kms:*\'\n              Resource: \'*\'\n            - Sid: Allow CloudWatch Logs\n              Effect: Allow\n              Principal:\n                Service: !Sub \'logs.${AWS::Region}.amazonaws.com\'\n              Action:\n                - "kms:Encrypt*"\n                - "kms:Decrypt*"\n                - "kms:ReEncrypt*"\n                - "kms:GenerateDataKey*"\n                - "kms:Describe*"\n              Resource: \'*\'\n              Condition:\n                ArnEquals: \n                  \'kms:EncryptionContext:aws:logs:arn\': !Join \n                    - \'\'\n                    - - \'arn:aws:logs:\'\n                      - !Ref \'AWS::Region\'\n                      - \':\'\n                      - !Ref \'AWS::AccountId\'\n                      - \':log-group:\'\n                      - !FindInMap [ RegionMap, !Ref \'AWS::Region\', LogGroupNameSessionManager ]\n    KMSAlias:\n      Type: \'AWS::KMS::Alias\'\n      Properties:\n        AliasName: !Sub \'alias/${KMSId}\'\n        TargetKeyId: !Ref KMSKey\n\n    InterfaceEndpointSSM:\n      Type: \'AWS::EC2::VPCEndpoint\'\n      Condition: IsolatedSolution\n      Properties:\n        PrivateDnsEnabled: true\n        VpcEndpointType: Interface\n        ServiceName: !Sub \'com.amazonaws.${AWS::Region}.ssm\'\n        VpcId: !Ref VPC\n        SubnetIds: \n          - !Ref SubnetA\n        SecurityGroupIds:\n          - !Ref InstanceSecurityGroup\n    InterfaceEndpointEC2messages:\n      Type: \'AWS::EC2::VPCEndpoint\'\n      Condition: IsolatedSolution\n      Properties:\n        PrivateDnsEnabled: true\n        VpcEndpointType: Interface\n        ServiceName: !Sub \'com.amazonaws.${AWS::Region}.ec2messages\'\n        VpcId: !Ref VPC\n        SubnetIds: \n          - !Ref SubnetA\n        SecurityGroupIds:\n          - !Ref InstanceSecurityGroup\n    InterfaceEndpointSSMmessages:\n      Type: \'AWS::EC2::VPCEndpoint\'\n      Condition: IsolatedSolution\n      Properties:\n        PrivateDnsEnabled: true\n        VpcEndpointType: Interface\n        ServiceName: !Sub \'com.amazonaws.${AWS::Region}.ssmmessages\'\n        VpcId: !Ref VPC\n        SubnetIds: \n          - !Ref SubnetA\n        SecurityGroupIds:\n          - !Ref InstanceSecurityGroup\n    InterfaceEndpointLogs:\n      Type: \'AWS::EC2::VPCEndpoint\'\n      Condition: IsolatedSolution\n      Properties:\n        PrivateDnsEnabled: true\n        VpcEndpointType: Interface\n        ServiceName: !Sub \'com.amazonaws.${AWS::Region}.logs\'\n        VpcId: !Ref VPC\n        SubnetIds: \n          - !Ref SubnetA\n        SecurityGroupIds:\n          - !Ref InstanceSecurityGroup\n    InterfaceEndpointS3:\n      Type: \'AWS::EC2::VPCEndpoint\'\n      Condition: IsolatedSolution\n      Properties:\n        PolicyDocument:\n          Version: 2012-10-17\n          Statement:\n            - Effect: Allow\n              Principal: \'*\'\n              Action:\n                - \'s3:PutObject\'\n              Resource:\n                - !Sub ${S3BucketUserFiles.Arn}/*\n            - Effect: "Allow"\n              Principal: \'*\'\n              Action:\n                - "s3:GetEncryptionConfiguration"\n              Resource: "*"\n        ServiceName: !Sub \'com.amazonaws.${AWS::Region}.s3\'\n        VpcId: !Ref VPC\n        RouteTableIds: [!Ref RouteTable]\n    InterfaceEndpointKMS:\n      Type: \'AWS::EC2::VPCEndpoint\'\n      Condition: IsolatedSolution\n      Properties:\n        PrivateDnsEnabled: true\n        VpcEndpointType: Interface\n        ServiceName: !Sub \'com.amazonaws.${AWS::Region}.kms\'\n        VpcId: !Ref VPC\n        SubnetIds: \n          - !Ref SubnetA\n        SecurityGroupIds:\n          - !Ref InstanceSecurityGroup\n\n    ################# START #################\n    # Links for CommandRunner w EC2:\n    # https://github.com/aws-cloudformation/aws-cloudformation-resource-providers-awsutilities-commandrunner\n    # https://aws.amazon.com/premiumsupport/knowledge-center/cloudformation-commandrunner-stack/\n    # The command runs on the EC2 Instance.\n    CommandRunner:\n      Type: AWSUtility::CloudFormation::CommandRunner\n      Condition: CreateResourcesEC2\n      Properties: \n        Timeout: 300\n        Command: !Sub\n          - \'echo "{ \\"schemaVersion\\": \\"1.0\\", \\"description\\": \\"Document to hold regional settings for Session Manager\\", \\"sessionType\\": \\"Standard_Stream\\", \\"inputs\\": { \\"s3BucketName\\": \\"${S3BucketUserFiles}\\", \\"s3KeyPrefix\\": \\"ec2session\\", \\"s3EncryptionEnabled\\": true, \\"cloudWatchLogGroupName\\": \\"${LogGroup_Name_SessionManager}\\", \\"cloudWatchEncryptionEnabled\\": true, \\"cloudWatchStreamingEnabled\\": true, \\"kmsKeyId\\": \\"\\", \\"runAsEnabled\\": false, \\"runAsDefaultUser\\": \\"\\", \\"idleSessionTimeout\\": \\"\\", \\"maxSessionDuration\\": \\"\\", \\"shellProfile\\": { \\"windows\\": \\"\\", \\"linux\\": \\"\\" } } }" > SessionManagerRunShell.json && aws ssm update-document --name "SSM-SessionManagerRunShell" --region ${AWS::Region} --content "file://SessionManagerRunShell.json" --document-version "\\$LATEST" --output text > /command-output.txt\'\n          - LogGroup_Name_SessionManager: !FindInMap [ RegionMap, !Ref \'AWS::Region\', LogGroupNameSessionManager ]\n        SubnetId: !Ref SubnetA\n        LogGroup: CommandRunnerLogs\n        Role: !Ref CommandRunnerInstanceProfile\n\n    CommandRunnerInstanceRole:\n      Type: "AWS::IAM::Role"\n      Condition: CreateResourcesEC2\n      Properties: \n        AssumeRolePolicyDocument: \n          Version: "2012-10-17"\n          Statement: \n            - \n              Effect: "Allow"\n              Principal: \n                Service: \n                  - "ec2.amazonaws.com"\n              Action: \n                - "sts:AssumeRole"\n        Path: "/"\n    CommandRunnerRolePolicies: \n      Type: "AWS::IAM::Policy"\n      Condition: CreateResourcesEC2\n      Properties: \n        PolicyName: !Join \n          - \'\'\n          -\n            - \'CommandRunner\'\n            - !Ref ProjectName\n            - \'policy\'\n        PolicyDocument: \n          Version: "2012-10-17"\n          Statement: \n            - Effect: "Allow"\n              Action:\n                - \'logs:CreateLogStream\'\n                - \'logs:PutLogEvents\'\n                - \'logs:DescribeLogGroups\'\n                - \'logs:DescribeLogStreams\'\n                - \'logs:CreateLogGroup\'\n              Resource: !Sub \'arn:aws:logs:${AWS::Region}:${AWS::AccountId}:log-group:*\'\n            - Effect: "Allow"\n              Action:\n                - \'ssm:CreateDocument\'\n                - \'ssm:GetDocument\'\n                - \'ssm:UpdateDocument\'\n                - \'ssm:DeleteDocument\'\n              Resource: !Sub \'arn:aws:ssm:${AWS::Region}:${AWS::AccountId}:document/SSM-SessionManagerRunShell\'\n        Roles:\n          - !Ref CommandRunnerInstanceRole\n    CommandRunnerInstanceProfile:\n      Type: "AWS::IAM::InstanceProfile"\n      Condition: CreateResourcesEC2\n      Properties: \n        Path: "/"\n        Roles: \n          - !Ref CommandRunnerInstanceRole\n    ################# END #################\n    \n    ################# START #################\n    # Lambda function to modify preferences for SSM\n\n    CustomResourceLambdaExecutionRoleSSM:\n        Type: \'AWS::IAM::Role\'\n        Condition: CreateResourcesLambda\n        Properties:\n            AssumeRolePolicyDocument:\n                Version: 2012-10-17\n                Statement:\n                    - Effect: Allow\n                      Principal:\n                          Service: lambda.amazonaws.com\n                      Action:\n                          - \'sts:AssumeRole\'\n            Policies:\n                - PolicyName: LoggingPolicySSM\n                  PolicyDocument:\n                      Version: 2012-10-17\n                      Statement:\n                          - Effect: Allow\n                            Action:\n                                - logs:CreateLogGroup\n                                - logs:CreateLogStream\n                                - logs:PutLogEvents\n                            Resource: \'*\'\n                - PolicyName: SSMPolicySSM\n                  PolicyDocument:\n                      Version: 2012-10-17\n                      Statement:\n                        - Effect: "Allow"\n                          Action:\n                            - \'ssm:CreateDocument\'\n                            - \'ssm:GetDocument\'\n                            - \'ssm:UpdateDocument\'\n                            - \'ssm:DeleteDocument\'\n                          Resource: !Sub \'arn:aws:ssm:${AWS::Region}:${AWS::AccountId}:document/SSM-SessionManagerRunShell\'\n\n    CustomResourceLambdaFunctionSSM:\n        Type: \'AWS::Lambda::Function\'\n        Condition: CreateResourcesLambda\n        Properties:\n            Code:\n                ZipFile: |\n                    import json\n                    import cfnresponse\n                    import boto3\n                    import sys\n\n                    ssm = boto3.client(\'ssm\')\n                    # param = event[\'ResourceProperties\'][\'Parameters\']\n                    \n                    def createRequest(param):    \n                        try:\n                            createDocRequest = ssm.update_document(\n                                Content = param,\n                                Name = \'SSM-SessionManagerRunShell\',\n                                DocumentVersion = \'$LATEST\'\n                            )\n                        except botocore.exceptions.ClientError:\n                            print("ClientError:", sys.exc_info()[0])\n                        except:\n                            print("Unexpected error:", sys.exc_info()[0])\n                    \n                    def lambda_handler(event, context):\n                        print(event)\n                        print(\'boto version \' + boto3.__version__)\n                        responseData = {}\n                        responseStatus = cfnresponse.SUCCESS\n                        param = event[\'ResourceProperties\'][\'Parameters\']\n\n                        if event[\'RequestType\'] == \'Create\':\n                            createRequest(param)\n                            responseData[\'Message\'] = "System Manager parameter updated successfully!"\n\n                        elif event[\'RequestType\'] == \'Update\':\n                            createRequest(param)\n                            responseData[\'Message\'] = "System Manager parameter updated successfully!"\n\n                        elif event[\'RequestType\'] == \'Delete\':\n                            responseData[\'Message\'] = "Cleared session preferences!"\n                            param = \'{ "schemaVersion": "1.0", "description": "Document to hold regional settings for Session Manager", "sessionType": "Standard_Stream", "inputs": { "s3BucketName": "", "s3KeyPrefix": "", "s3EncryptionEnabled": true, "cloudWatchLogGroupName": "", "cloudWatchEncryptionEnabled": true, "cloudWatchStreamingEnabled": true, "kmsKeyId": "", "runAsEnabled": false, "runAsDefaultUser": "", "idleSessionTimeout": "", "maxSessionDuration": "", "shellProfile": { "windows": "", "linux": "" } } }\'\n                            createDocRequest = ssm.update_document(Content = param,Name = \'SSM-SessionManagerRunShell\',DocumentVersion = \'$LATEST\')\n                            print(createDocRequest)\n\n                        cfnresponse.send(event, context, responseStatus, responseData)\n            Handler: index.lambda_handler\n            Runtime: python3.9\n            Role: !GetAtt CustomResourceLambdaExecutionRoleSSM.Arn\n\n    CustomResourceSSM:\n        Type: Custom::CustomResource\n        Condition: CreateResourcesLambda\n        Properties:\n            ServiceToken: !GetAtt CustomResourceLambdaFunctionSSM.Arn\n            Parameters: !Sub \n              - \'{ "schemaVersion": "1.0", "description": "Document to hold regional settings for Session Manager", "sessionType": "Standard_Stream", "inputs": { "s3BucketName": "${S3BucketUserFiles}", "s3KeyPrefix": "ec2session", "s3EncryptionEnabled": true, "cloudWatchLogGroupName": "${LogGroup_Name_SessionManager}", "cloudWatchEncryptionEnabled": true, "cloudWatchStreamingEnabled": true, "kmsKeyId": "", "runAsEnabled": false, "runAsDefaultUser": "", "idleSessionTimeout": "", "maxSessionDuration": "", "shellProfile": { "windows": "", "linux": "" } } }\'\n              - LogGroup_Name_SessionManager: !FindInMap [ RegionMap, !Ref \'AWS::Region\', LogGroupNameSessionManager ]\n    ################# END #################\n    \n    ################# START #################\n    # Lambda function to empty S3 during delete bucket\n    CustomResourceLambdaExecutionRoleS3:\n        Type: \'AWS::IAM::Role\'\n        Condition: EmptyBucket\n        Properties:\n            AssumeRolePolicyDocument:\n                Version: 2012-10-17\n                Statement:\n                    - Effect: Allow\n                      Principal:\n                          Service: lambda.amazonaws.com\n                      Action:\n                          - \'sts:AssumeRole\'\n            Policies:\n                - PolicyName: LoggingPolicyS3\n                  PolicyDocument:\n                      Version: 2012-10-17\n                      Statement:\n                          - Effect: Allow\n                            Action:\n                                - logs:CreateLogGroup\n                                - logs:CreateLogStream\n                                - logs:PutLogEvents\n                            Resource: \'*\'\n                - PolicyName: S3PolicyS3\n                  PolicyDocument:\n                      Version: 2012-10-17\n                      Statement:\n                          - Effect: Allow\n                            Action:\n                                - s3:List*\n                                - s3:DeleteObject\n                            Resource: \'*\'\n\n    CustomResourceLambdaFunctionS3:\n        Type: \'AWS::Lambda::Function\'\n        Condition: EmptyBucket\n        Properties:\n            Code:\n                ZipFile: |\n                    import cfnresponse\n                    import boto3\n\n                    def handler(event, context):\n                        print(event)\n                        print(\'boto version \' + boto3.__version__)\n                        responseData = {}\n                        responseStatus = cfnresponse.SUCCESS\n                        s3bucketName = event[\'ResourceProperties\'][\'s3bucketName\']\n\n                        if event[\'RequestType\'] == \'Create\':\n                            responseData[\'Message\'] = "Resource creation successful!"\n\n                        elif event[\'RequestType\'] == \'Update\':\n                            responseData[\'Message\'] = "Resource update successful!"\n\n                        elif event[\'RequestType\'] == \'Delete\':\n                            # Need to empty the S3 bucket before it is deleted\n                            s3 = boto3.resource(\'s3\')\n                            bucket = s3.Bucket(s3bucketName)\n                            bucket.objects.all().delete()\n\n                            responseData[\'Message\'] = "Resource deletion successful!"\n\n                        cfnresponse.send(event, context, responseStatus, responseData)\n\n\n            Handler: index.handler\n            Runtime: python3.9\n            Role: !GetAtt CustomResourceLambdaExecutionRoleS3.Arn\n\n    CustomResourceS3:\n        Type: Custom::CustomResource\n        Condition: EmptyBucket\n        DependsOn: S3BucketUserFiles\n        Properties:\n            ServiceToken: !GetAtt CustomResourceLambdaFunctionS3.Arn\n            s3bucketName: !Ref S3BucketUserFiles\n\n\nOutputs:\n  InstanceId:\n    Description: InstanceId of the newly created EC2 instance\n    Value: !Ref EC2Instance\n  AZ:\n    Description: Availability Zone of the newly created EC2 instance\n    Value:\n      \'Fn::GetAtt\':\n        - EC2Instance\n        - AvailabilityZone\n  PublicDNS:\n    Description: Public DNSName of the newly created EC2 instance\n    Value:\n      \'Fn::GetAtt\':\n        - EC2Instance\n        - PublicDnsName\n  # PublicIP:\n  #   Description: Public IP address of the newly created EC2 instance\n  #   Value:\n  #     \'Fn::GetAtt\':\n  #       - EC2Instance\n  #       - PublicIp\n  # Output:\n  #   Description: The output of the command.\n  #   Value: !GetAtt CommandRunner.Output\n'})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var o=t(6540);const a={},s=o.createContext(a);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);