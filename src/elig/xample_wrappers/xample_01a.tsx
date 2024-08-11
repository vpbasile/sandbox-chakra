export const Example_01a = () => <>
    <h1> Example 1a: Generic Request By a Clinic for the Patient’s (Subscriber) Eligibility</h1>
    <p>This is an example of an eligibility request from a clinic to a payer processed in Real Time (see Section 1.4.3 - Batch and Real Time). The clinic is inquiring if the patient (the subscriber) has coverage.The request is from Bone and Joint Clinic to the ABC Company. This example uses the Primary Search Option (see Section 1.4.8 - Search Options) for a subscriber who is the patient and is for a generic request for Eligibility (see Section 1.4.7 - Implementation-Compliant Use of the 270/271 Transaction Set).</p>
    <div className="example_item__example-body"><h2>Transmission Explanation</h2>

        <p className="data">ST*270*1234*005010X279A1~</p>
        <p className="less">Transaction Set ID Code = 270 (Eligibility, Coverage or Benefit Inquiry)</p>
        <p className="less">Transaction Set Control Number = 1234</p>
        <p>Implementation Convention Reference = 005010X279A1</p>

        <p className="data">BHT*0022*13*10001234*20060501*1319~</p>
        <p className="less">Hierarchical Structure Code = 0022 (Information Source, Information Receiver, Subscriber, Dependent)</p>
        <p className="less">Transaction Set Purpose Code = 13 (Request) Identification</p>
        <p className="less">Reference Identification = 10001234</p>
        <p className="less">Date = 20060501 (May 1, 2006)</p>
        <p>Time = 1:19 PM</p>

        <p className="data">HL*1**20*1~</p>
        <p className="less">Hierarchical ID Number = 1</p>
        <p className="less">Hierarchical Parent ID Number = * not used</p>
        <p className="less">Hierarchical Level Code = 20 (Information Source)</p>
        <p>Hierarchical Child Code = 1</p>

        <p className="data">NM1*PR*2*ABC COMPANY*****PI*842610001~</p>
        <p className="less">Entity Identifier Code = PR (Payer)</p>
        <p className="less">Entity Type Qualifier = 2 (Non-person)</p>
        <p className="less">Last Name = ABC Company</p>
        <p className="less">First Name = * not used</p>
        <p className="less">Middle Name = * not used</p>
        <p className="less">Name Prefix = * not used</p>
        <p className="less">Name Suffix = * not used</p>
        <p className="less">Identification Code Qualifier = PI (Payer Identification)</p>
        <p>Identification Code = 842610001</p>

        <p className="data">HL*2*1*21*1~</p>
        <p className="less">Hierarchical ID Number = 2</p>
        <p className="less">Hierarchical Parent ID Number = 1</p>
        <p className="less">Hierarchical Level Code = 21</p>
        <p>Hierarchical Child Code = 1</p>

        <p className="data">NM1*1P*2*BONE AND JOINT CLINIC*****SV*2000035~</p>
        <p className="less">Entity Identifier Code = 1P (Provider)</p>
        <p className="less">Entity Type Qualifier = 2 (Non-person)</p>
        <p className="less">Last Name = Bone and Joint Clinic</p>
        <p className="less">First Name = * not used</p>
        <p className="less">Middle Name = * not used</p>
        <p className="less">Name Prefix = * not used</p>
        <p className="less">Name Suffix = * not used</p>
        <p className="less">Identification Code Qualifier = SV Service Provider Number</p>
        <p>Identification Code = 2000035</p>

        <p className="data">HL*3*2*22*0~</p>
        <p className="less">Hierarchical ID Number = 3</p>
        <p className="less">Hierarchical Parent ID Number = 2</p>
        <p className="less">Hierarchical Level Code = 22</p>
        <p>Hierarchical Child Code = 0</p>

        <p className="data">TRN*1*93175-012547*9877281234~</p>
        <p className="less">Trace Type Code = 1 (Current Transaction Trace Number)</p>
        <p className="less">Reference Identification = 93175-012547</p>
        <p className="less">Originating Company Identifier = 9877281234</p>
        <p>Reference Identification = * not used</p>

        <p className="data">NM1*IL*1*SMITH*ROBERT****MI*11122333301~</p>
        <p className="less">Entity Identifier Code = IL (Insured or Subscriber)</p>
        <p className="less">Entity Type Qualifier = 1 (Person)</p>
        <p className="less">Last Name = Smith</p>
        <p className="less">First Name = Robert</p>
        <p className="less">Middle Name = * not used</p>
        <p className="less">Name Prefix = * not used</p>
        <p className="less">Name Suffix = * not used</p>
        <p className="less">Identification Code Qualifier = MI (Member Identification Number)</p>
        <p>Identification Code = 11122333301</p>

        <p className="data">DMG*D8*19430519~</p>
        <p className="less">Date Time Period Format = D8 (Date Expressed in Format CCYYMMDD)</p>
        <p>Date Time Period = 19430519</p>

        <p className="data">DTP*291*D8*20060501~</p>
        <p className="less">Date/Time Qualifier = 291 (Plan)</p>
        <p className="less">Date Time Period Format Qualifier D8 (Dates Expressed in Format CCYYMMDD)</p>
        <p>Date Time Period = 20060501 (May 1, 2006)</p>

        <p className="data">EQ*30~</p>
        <p>Service Type Code = 30 (Health Benefit Plan Coverage</p>

        <p className="data">SE*13*1234~</p>
        <p className="less">Number of Included Segments = 13</p>
        <p>Transaction Set Control Number = 1234</p></div>
</>
