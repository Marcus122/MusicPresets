# MusicPresets
API to Edit User Presets with a simple GUI frontend

Get/Create/Update/Delete presets for equalizers and compressors

The server uses a MongoDB with a simple rest API.

There are two endpoints for the API, one for compressors and one for equalizers.

The schema's are defined is server/models

To run the server
```javascript
cd server
npm install
node server
```

The client uses react and redux to edit the presets and connect to the API.

The javascript is written in ES6 and uses a babel transpiler and webpack to convert into ES5.

To run the client
```javascript
cd client
npm install
npm start
Goto localhost:8080
```

```javascript
API

Get Equalizers GET /api/v1/equalizers
Create Equalizer POST /api/v1/equalizers
Get Equalizer GET /api/v1/equalizers/:id
Update Equalizer PUT /api/v1/equalizers/:id
Delete Equalizer DELETE /api/v1/equalizers/:id

Get Compressors GET /api/v1/compressors
Create Compressor POST /api/v1/compressors
Get Compressor GET /api/v1/compressors/:id
Update Compressor PUT /api/v1/compressors/:id
Delete Compressor DELETE /api/v1/compressors/:id

```
