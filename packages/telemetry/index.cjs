const secure = require('@lukeed/uuid/secure');
const Analytics = require('analytics-node')
const { readJSONSync, writeJSONSync, pathExistsSync } = require('fs-extra')
const wK = 'ydlp5unBbi75doGz89jC3P1Llb4QjYkM'

const initializeProfile = async () => {  
    const projectProfile = {
        anonymousId: secure.v4(), 
        traits: {
            projectCreated: new Date()
        }
    }
    writeJSONSync("./.profile.json", projectProfile)
    Analytics.identify(projectProfile);
    return projectProfile 
}

const getProfile = async () => {
    if (!pathExistsSync("./.profile.json")) {
        const profile = await initializeProfile()
        return profile
    }  
    else {
        let profile = readJSONSync("./.profile.json")
        if (profile.anonymousId === "b958769d-6b88-43f3-978a-b970a146ffd2") {
            // This anon ID was incorrectly committed to the template project, replace with a fresh ID going forward
            profile = await initializeProfile()
        }
        return profile
    }
}

const logEvent = async (eventName, dev, settings) => {
    try {
        const track = (settings ? settings.send_anonymous_usage_stats : process.env["SEND_ANONYMOUS_USAGE_STATS"] || process.env["send_anonymous_usage_stats"]) ?? true
        if(track){
            projectProfile = await getProfile()
            var analytics = new Analytics(wK);
            analytics.track({
                anonymousId:projectProfile.anonymousId,
                event: eventName,
                properties: {
                  devMode: dev 
                }
              });
        }
    }catch {
        // do nothing
    }
} 

module.exports = logEvent
