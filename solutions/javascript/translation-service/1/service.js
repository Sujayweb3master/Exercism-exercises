/// <reference path="./global.d.ts" />
// @ts-check
//
// The lines above enable type checking for this file. Various IDEs interpret
// the @ts-check and reference directives. Together, they give you helpful
// autocompletion when implementing this exercise. You don't need to understand
// them in order to use it.
//
// In your own projects, files, and code, you can play with @ts-check as well.


export class TranslationService {
  /**
   * Creates a new service
   * @param {ExternalApi} api the original api
   */
  constructor(api) {
    this.api = api;
  }

  /**
   * Attempts to retrieve the translation for the given text.
   *
   * - Returns whichever translation can be retrieved, regardless the quality
   * - Forwards any error from the translation api
   *
   * @param {string} text
   * @returns {Promise<string>}
   */
  free(text) {
    return this.api.fetch(text)
      .then(function (value) {
        console.log(value)
        return value.translation;
      }).catch(function (error) {
        throw error
      })
      
  }

  /**
   * Batch translates the given texts using the free service.
   *
   * - Resolves all the translations (in the same order), if they all succeed
   * - Rejects with the first error that is encountered
   * - Rejects with a BatchIsEmpty error if no texts are given
   *
   * @param {string[]} texts
   * @returns {Promise<string[]>}
   */
    batch(texts) {
        if (texts.length === 0) {
            return Promise.reject(new BatchIsEmpty());
        }
      
        let translatedTexts = texts;

        return Promise.all(texts.map((text, index) => {
            return this.api.fetch(text)
                .then(function (value) {
                    translatedTexts.splice(index, 1, value.translation)
                    console.log(translatedTexts)
                })
        }))
            .then(() => translatedTexts)


    }

  /**
   * Requests the service for some text to be translated.
   *
   * Note: the request service is flaky, and it may take up to three times for
   *       it to accept the request.
   *
   * @param {string} text
   * @returns {Promise<void>}
   */
   request(text) {
    let retries = 1;

    return new Promise((resolve, reject) => {
        const attempt = () => {
            this.api.request(text, callback)
        }

        const callback = (result) => {

            if (retries === 3) {
              if ( result instanceof Error) {
                reject(result)
                return
            } else {
              resolve(result)
                return
            }
            } 

            if (result === undefined) {
                retries = 3;
                resolve(undefined);
                return
            } else if (result instanceof Error) {
                retries++;
                attempt();
                return
            }


        }

        attempt();
    })

}

  /**
   * Retrieves the translation for the given text
   *
   * - Rejects with an error if the quality can not be met
   * - Requests a translation if the translation is not available, then retries
   *
   * @param {string} text
   * @param {number} minimumQuality
   * @returns {Promise<string>}
   */
  premium(text, minimumQuality) {

    return new Promise((resolve, reject) => {

        const fetchTranslation = async () => {
            try {
                const response = await this.api.fetch(text)

                if (minimumQuality > response?.quality) {
                    reject(new QualityThresholdNotMet())
                    return
                } else {
                    resolve(response?.translation)
                    return
                }

            } catch (error) {
                await requestTranslation()
                console.error(error)
                return

            }
        }

        const callBackFunction = (result) => {
            if (result === undefined) {
                fetchTranslation()
                return;
            }
            if (result instanceof Error) {
                reject(result)
                return
            }
        }

        const requestTranslation = async () => {
            this.api.request(text, callBackFunction)
            return
        }

        fetchTranslation()
    })
}
}

/**
 * This error is used to indicate a translation was found, but its quality does
 * not meet a certain threshold. Do not change the name of this error.
 */
export class QualityThresholdNotMet extends Error {
  /**
   * @param {string} text
   */
  constructor(text) {
    super(
      `
The translation of ${text} does not meet the requested quality threshold.
    `.trim(),
    );

    this.text = text;
  }
}

/**
 * This error is used to indicate the batch service was called without any
 * texts to translate (it was empty). Do not change the name of this error.
 */
export class BatchIsEmpty extends Error {
  constructor() {
    super(
      `
Requested a batch translation, but there are no texts in the batch.
    `.trim(),
    );
  }
}
