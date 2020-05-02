/*
 *  Song specificiation for Alt Jazz song Next Level Shit 
 */

var altJazzSongs = altJazzSongs || {};

altJazzSongs["Next Level Shit"] = {

    partsInBooks: {
        "Flute, Alto Flute & Piccolo": {
            "Next Level Shit": [ "Flute" ], 
        },
        "English Horn": {
            "Next Level Shit": [ "English Horn in F", "Lead Sheet" ], 
        },
        "Bass Clarinet": {
            "Next Level Shit": [ "Bass Clarinet in Bb" ],
        },
        "Voice/Percussion": {
            "Next Level Shit": [ "Voice" ],
        },
        "Drums": {
            "Next Level Shit": [ "Clave", "Clave Chords" ], 
        },
        "Violin I": {
            "Next Level Shit": [ "Violin I", "Lead Sheet" ], 
        },
        "Violin II": {
            "Next Level Shit": [ "Violin II" ], 
        },
        "Viola": {
            "Next Level Shit": [ "Viola" ], 
        },
        "'Cello": {
            "Next Level Shit": [ "'Cello" ],
        },
        "Bass": {
            "Next Level Shit": [ "Bass" ], 
        }
    },

    songs: {

        "Next Level Shit": {
            metadata: { 
                title: "Next Level Shit",
                composer: "Elaine Paul",
                arranger: "Elaine Paul",
                genre: "Afro-Cuban Jazz",
                bpm: '216',
                key: "Ab"
            },
            baseUrl: 'http://ali-cia.net/altjazz/scores/', 
            pdfSubdir: "/",
            fileLocation: "next-level-shit",
            filePrefix: "next-level-shit-",
            parts: {
                "Flute": { fileSuffix: "Flute" },
                "English Horn in F": { fileSuffix: "English-Horn-in-F" },
                "Bass Clarinet in Bb": { fileSuffix: "Bass-Clarinet-in-Bb" },
                "Trumpet in Bb": { fileSuffix: "Trumpet-in-Bb" },
                "Horn in F": { fileSuffix: "Horn-in-F" },
                "Trombone": { fileSuffix: "Trombone" },
                "Clave": { fileSuffix: "Clave" },
                "Clave Chords": { fileSuffix: "Clave-Chords" },
                "Piano": { fileSuffix: "Piano" },
                "Voice": { fileSuffix: "Voice" },
                "Lead Sheet": { fileSuffix: "Lead" },
                "Lead Sheet for Bb": { fileSuffix: "Lead-for-Bb" },
                "Lead Sheet for Eb": { fileSuffix: "Lead-for-Eb" },
                "Violin I": { fileSuffix: "Violin-I" },
                "Violin II": { fileSuffix: "Violin-II" },
                "Viola": { fileSuffix: "Viola" },
                "'Cello": { fileSuffix: "Cello" },
                "Bass": { fileSuffix: "Bass" }
            },
            scores: {
                //"Rhythm": { fileSuffix: "Rhythm" },
                //"Condensed Score": { fileSuffix: "Condensed-Score" },
                "Transposed Score": { fileSuffix: "Score-Transposed" },
                //"Concert Score": { fileSuffix: "Score-Concert" },
                "Lead Sheet": { fileSuffix: "Lead-Sheet" }
            },
            recordings: {
                demo: {
                    description: 'MIDI for tracking (six bars out front, of 3-2 clave), on SoundClound',
                    url: 'https://soundcloud.com/david-elaine-alt/next-level-shit-midi'
                },
                reference: {
                    description: 'MIDI for tracking (six bars out front, of 3-2 clave), on Google Drive',
                    url: 'https://drive.google.com/open?id=1YNwW5MLhluxKiFSmgqFSA6r6R9VHpsrL'
                },
                reading: {
                    description: 'reading',
                    url: ''
                },
                recording: {
                    description: 'recording',
                    url: ''
                },
                live: {
                    description: 'live',
                    url: ''
                }
            }
        }
    }
};