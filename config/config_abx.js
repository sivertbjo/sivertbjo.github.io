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
  "AudioRoot": "/audio",
  "Testsets": [
    //    
    {
      "Name": "Domkirken",
      "TestID": "id1",
      "Files": {
        "A": "audio/CATHEDRAL_REAL.wav",
        "B": "audio/CATHEDRAL_FAKE.wav",
      }
    },
    //    
    {
      "Name": "Sofienbergkirken",
      "TestID": "id2",
      "Files": {
        "A": "audio/SOFIENBERG_FAKE.wav",
        "B": "audio/SOFIENBERG_REAL.wav",
      }
    },
  ]
}
