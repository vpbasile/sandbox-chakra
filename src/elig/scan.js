// <> Parsing Constants
const segmentDelimiter = `~`;
// const fieldDelimitier = '*';

const segmentInfo = [
	{"id":"BHT","name":""},
	{"id":"CL1","name":""},
	{"id":"CMS","name":""},
	{"id":"CR1","name":""},
	{"id":"CR2","name":""},
	{"id":"CR5","name":""},
	{"id":"CR6","name":""},
	{"id":"CRC","name":""},
	{"id":"DMG","name":""},
	{"id":"DTP","name":""},
	{"id":"HI","name":""},
	{"id":"HL","name":"Hierarchical Level"},
	{"id":"HSD","name":""},
	{"id":"INS","name":""},
	{"id":"MSG","name":""},
	{"id":"N3","name":""},
	{"id":"N4","name":""},
	{"id":"NM1","name":""},
	{"id":"PER","name":""},
	{"id":"PRV","name":""},
	{"id":"PWK","name":""},
	{"id":"REF","name":""},
	{"id":"SE","name":""},
	{"id":"ST","name":""},
	{"id":"SV1","name":""},
	{"id":"SV2","name":""},
	{"id":"SV3","name":""},
	{"id":"TOO","name":""},
	{"id":"TRN","name":""},
	{"id":"UM","name":""},
	{"id":"X12N","name":""}
]

const exampleMessages = ["ISA*00*          *00*          *ZZ*123456789012345*ZZ*123456789012346*080503*1705*>*00501*000010216*0*T*:~GS*HB*1234567890*1234567890*20080503*1705*20213*X*005010X279~ST*271*4322*005010X279~BHT*0022*11*10001235*20060501*1319~HL*1**20*1~NM1*PR*2*ABC COMPANY*****PI*842610001~HL*2*1*21*1~NM1*1P*2*BONE AND JOINT CLINIC*****SV*2000035~HL*3*2*22*1~NM1*IL*1*SMITH*JOHN****MI*123456789~N3*15197 BROADWAY AVENUE*APT 215~N4*KANSAS CITY*MO*64108~DMG*D8*19630519*M~HL*4*3*23*0~TRN*2*93175-012547*9877281234~NM1*03*1*SMITH*MARY~N3*15197 BROADWAY AVENUE*APT 215~N4*KANSAS CITY*MO*64108~DMG*D8*19981014*F~INS*N*19~DTP*346*D8*20060101~EB*1**30**GOLD 123 PLAN~EB*L~EB*1**1>33>35>47>86>88>98>AL>MH>UC~EB*B**1>33>35>47>86>88>98>AL>MH>UC*HM*GOLD 123 PLAN*27*10*****Y~EB*B**1>33>35>47>86>88>98>AL>MH>UC*HM*GOLD 123 PLAN*27*30*****N~LS*2120~NM1*P3*1*JONES*MARCUS****SV*0202034~LE*2120~SE*28*4322~GE*1*20213~IEA*1*000010216~",
    "ISA*00*          *00*          *ZZ*123456789012345*ZZ*123456789012346*080503*1705*>*00501*000010216*0*T*:~GS*HB*1234567890*1234567890*20080503*1705*20213*X*005010X279~ST*271*4321*005010X279~BHT*0022*11*10001234*20060501*1319~HL*1**20*1~NM1*PR*2*ABC COMPANY*****PI*842610001~HL*2*1*21*1~NM1*1P*2*BONE AND JOINT CLINIC*****SV*2000035~HL*3*2*22*0~TRN*2*93175-012547*9877281234~NM1*IL*1*SMITH*JOHN****MI*123456789~N3*15197 BROADWAY AVENUE*APT 215~N4*KANSAS CITY*MO*64108~DMG*D8*19630519*M~DTP*346*D8*20060101~EB*1**30**GOLD 123 PLAN~EB*L~EB*1**1>33>35>47>86>88>98>AL>MH>UC~EB*B**1>33>35>47>86>88>98>AL>MH>UC*HM*GOLD 123 PLAN*27*10*****Y~EB*B**1>33>35>47>86>88>98>AL>MH>UC*HM*GOLD 123 PLAN*27*30*****N~LS*2120~NM1*P3*1*JONES*MARCUS****SV*0202034~LE*2120~SE*22*4321~GE*1*20213~IEA*1*000010216~",
    "ISA*00*          *00*          *ZZ*123456789012345*ZZ*123456789012346*080503*1705*>*00501*000010216*0*T*:~GS*HS*1234567890*1234567890*20080503*1705*20213*X*005010X279A1~ST*270*1235*005010X279A1~BHT*0022*13*10001235*20060501*1320~HL*1**20*1~NM1*PR*2*ABC COMPANY*****PI*842610001~HL*2*1*21*1~NM1*1P*1*JONES*MARCUS****SV*0202034~HL*3*2*22*1~NM1*IL*1******MI*11122333301~HL*4*3*23*0~TRN*1*93175-012547*9877281234~NM1*03*1*SMITH*MARY~DMG*D8*19781014~DTP*291*D8*20060501~EQ*30~SE*15*1235~GE*1*20213~IEA*1*000010216~",
    "ISA*00*          *00*          *ZZ*123456789012345*ZZ*123456789012346*080503*1705*>*00501*000010216*0*T*:~GS*HS*1234567890*1234567890*20080503*1705*20213*X*005010X279A1~ST*270*1234*005010X279A1~BHT*0022*13*10001234*20060501*1319~HL*1**20*1~NM1*PR*2*ABC COMPANY*****PI*842610001~HL*2*1*21*1~NM1*1P*2*BONE AND JOINT CLINIC*****SV*2000035~HL*3*2*22*0~TRN*1*93175-012547*9877281234~NM1*IL*1*SMITH*ROBERT****MI*11122333301~DMG*D8*19430519~DTP*291*D8*20060501~EQ*30~SE*13*1234~GE*1*20213~IEA*1*000010216~",
    "ISA*00*          *00*          *ZZ*123456789012345*ZZ*123456789012346*080503*1705*>*00501*000010216*0*T*:~GS*HB*1234567890*1234567890*20080503*1705*20213*X*005010X279A1~ST*271*4323*005010X279A1~BHT*0022*11*10001234*20060501*1319~HL*1**20*1~NM1*PR*2*ABC COMPANY*****PI*842610001~HL*2*1*21*1~NM1*1P*2*BONE AND JOINT CLINIC*****SV*2000035~AAA*Y**50*N~SE*8*4323~GE*1*20213~IEA*1*000010216~"
]

const segmentIdentifiers = []

// Find all segment identifiers
exampleMessages.forEach((message) => {
    const segments = message.split(segmentDelimiter)
    segments.forEach((segment) => {
        const identifier = segment.split("*")[0]
        if (!segmentIdentifiers.includes(identifier)) {
            segmentIdentifiers.push(identifier)
        }
    })
})

console.log(`There are ${segmentInfo.length} unique segment identifiers.`)

// Add segment identifiers to segmentInfo
segmentIdentifiers.forEach((identifier) => {
    const segment = {"id":identifier,"name":""}
    segmentInfo.push(segment)
})

console.log(segmentInfo)
console.log(`There are ${segmentInfo.length} unique segment identifiers.`)
