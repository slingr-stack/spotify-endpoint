package io.slingr.endpoints.spotify;

import io.slingr.endpoints.HttpEndpoint;
import io.slingr.endpoints.exceptions.EndpointException;
import io.slingr.endpoints.framework.annotations.*;
import io.slingr.endpoints.services.AppLogs;
import io.slingr.endpoints.services.rest.RestClient;
import io.slingr.endpoints.utils.Json;
import io.slingr.endpoints.ws.exchange.FunctionRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.ws.rs.core.Form;


/**
 * <p>Spotify endpoint
 * <p>
 * API Reference:
 *
 * <p>Created by hpacini on 11/14/19.
 */
@SlingrEndpoint(name = "spotify", functionPrefix = "_")
public class SpotifyEndpoint extends HttpEndpoint {

    private static final Logger logger = LoggerFactory.getLogger(SpotifyEndpoint.class);

    private final static String API_URL = "https://api.spotify.com";
    private final static String TOKEN_URL = "https://accounts.spotify.com/api/token";

    private static final String ACCESS_TOKEN = "access_token";

    private String accessToken;
    private long currentTime;

    @ApplicationLogger
    protected AppLogs appLogger;

    @EndpointProperty
    private String clientId;

    @EndpointProperty
    private String clientSecret;

    @Override
    public String getApiUri() {
        return API_URL;
    }

    @Override
    public void endpointStarted() {
        httpService().setupDefaultHeader("Content-Type", "application/json");
        httpService().setAllowExternalUrl(true);
        httpService().setDebug(true);

        generateNewAccessToken();
    }

    @EndpointFunction(name = "_get")
    public Json userGet(FunctionRequest request) {

        try {
            Json res = defaultGetRequest(request);
            return res;
        } catch (EndpointException endpointException) {
            if (checkLastUpdate() && endpointException.getReturnCode() == 401) {
                generateNewAccessToken();
                return userGet(request);
            }
            throw endpointException;
        }
    }

    @EndpointFunction(name = "_post")
    public Json userPost(FunctionRequest request) {
        try {
            Json res = defaultPostRequest(request);
            return res;
        } catch (EndpointException endpointException) {
            if (checkLastUpdate() && endpointException.getReturnCode() == 401) {
                generateNewAccessToken();
                return userGet(request);
            }
            throw endpointException;
        }
    }

    @EndpointFunction(name = "_put")
    public Json userPut(FunctionRequest request) {
        try {
            Json res = defaultPutRequest(request);
            return res;
        } catch (EndpointException endpointException) {
            if (checkLastUpdate() && endpointException.getReturnCode() == 401) {
                generateNewAccessToken();
                return userGet(request);
            }
            throw endpointException;
        }
    }

    @EndpointFunction(name = "_delete")
    public Json userDelete(FunctionRequest request) {
        try {
            Json res = defaultDeleteRequest(request);
            return res;
        } catch (EndpointException endpointException) {
            if (checkLastUpdate() && endpointException.getReturnCode() == 401) {
                generateNewAccessToken();
                return userGet(request);
            }
            throw endpointException;
        }
    }

    private void generateNewAccessToken() {

        Form formBody = new Form().param("grant_type", "client_credentials");

        try {
            logger.debug("Refresh access token");

            Json refreshTokenResponse = RestClient.builder(TOKEN_URL)
                    .header("Content-Type", "application/x-www-form-urlencoded")
                    .header("Accept", "application/json")
                    .basicAuthenticationHeader(clientId, clientSecret)
                    .post(formBody);

            this.accessToken = refreshTokenResponse.string(ACCESS_TOKEN);
            this.currentTime = System.currentTimeMillis();

            httpService().setupDefaultHeader("Content-Type", "application/json");
            httpService().setupBearerAuthenticationHeader(this.accessToken);

        } catch (Exception ex) {
            appLogger.error(String.format("Token can not be refreshed for clientId: %s. [%s]", clientId, ex.getMessage()));
        }
    }

    private boolean checkLastUpdate() {
        if ((System.currentTimeMillis() - this.currentTime) / 1000 > 3500) {
            return true;
        }

        return false;
    }

}
