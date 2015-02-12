/**
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
 *
 * Copyright (c) 2012-2013 ForgeRock AS. All Rights Reserved
 *
 * The contents of this file are subject to the terms
 * of the Common Development and Distribution License
 * (the License). You may not use this file except in
 * compliance with the License.
 *
 * You can obtain a copy of the License at
 * http://forgerock.org/license/CDDLv1.0.html
 * See the License for the specific language governing
 * permission and limitations under the License.
 *
 * When distributing Covered Code, include this CDDL
 * Header Notice in each file and include the License file
 * at http://forgerock.org/license/CDDLv1.0.html
 * If applicable, add the following below the CDDL Header,
 * with the fields enclosed by brackets [] replaced by
 * your own identifying information:
 * "Portions Copyrighted [year] [name of copyright owner]"
 */

(function () {
    var user,
        _ = require("lib/lodash");

    // Get the current session's user information
    if (request.method === "read") {
        user = openidm.read(content.security.authenticationId.component + "/" + content.security.authenticationId.id);

        return _.extend({
                    dt_started_access: user.dt_started_access,
                    dt_ended_access: user.dt_ended_access
                }, context.security);
    } else {
        throw "Unsupported operation on info login service: " + request.method;
    }
    return val;
}());
