// configure the test here
var TestConfig = {
  "TestName": "Sivert Bjørnerås - ABX Test",
  "LoopByDefault": true,
  "ShowFileIDs": false,
  "ShowResults": false,
  "EnableABLoop": true,
  "EnableOnlineSubmission": false,
  "BeaqleServiceURL": "/web_service/beaqleJS_Service.php",
  "SupervisorContact": "",
  "AudioRoot": "",
  "Testsets": [
    //    
    {
      "Name": "Domkirken",
      "TestID": "id1",
      "Files": {
        "A": "CATHEDRAL REAL.wav",
        "B": "CATHEDRAL FAKE.wav",
      }
    },
    //    
    {
      "Name": "Sofienbergkirken",
      "TestID": "id2",
      "Files": {
        "A": "audio/SOFIENBERG FAKE.wav",
        "B": "audio/SOFIENBERG REAL.wav",
      }
    },
  ]
}
