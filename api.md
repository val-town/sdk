# Search

## Vals

Types:

- <code><a href="./src/resources/search/vals.ts">ValListResponse</a></code>

Methods:

- <code title="get /v1/search/vals">client.search.vals.<a href="./src/resources/search/vals.ts">list</a>({ ...params }) -> ValListResponse</code>

# Alias

## Username

Types:

- <code><a href="./src/resources/alias/username/username.ts">UsernameRetrieveResponse</a></code>

Methods:

- <code title="get /v1/alias/{username}">client.alias.username.<a href="./src/resources/alias/username/username.ts">retrieve</a>(username) -> UsernameRetrieveResponse</code>

### ValName

Methods:

- <code title="get /v1/alias/{username}/{val_name}">client.alias.username.valName.<a href="./src/resources/alias/username/val-name.ts">retrieve</a>(username, valName) -> void</code>

# Me

## Profile

Types:

- <code><a href="./src/resources/me/profile.ts">ProfileRetrieveResponse</a></code>

Methods:

- <code title="get /v1/me/">client.me.profile.<a href="./src/resources/me/profile.ts">retrieve</a>() -> ProfileRetrieveResponse</code>

## Likes

Methods:

- <code title="get /v1/me/likes">client.me.likes.<a href="./src/resources/me/likes.ts">list</a>({ ...params }) -> void</code>

## Comments

Methods:

- <code title="get /v1/me/comments">client.me.comments.<a href="./src/resources/me/comments.ts">list</a>({ ...params }) -> void</code>

## References

Methods:

- <code title="get /v1/me/references">client.me.references.<a href="./src/resources/me/references.ts">list</a>({ ...params }) -> void</code>

# Blobs

Methods:

- <code title="delete /v1/blob/{key}">client.blobs.<a href="./src/resources/blobs.ts">delete</a>(key) -> void</code>
- <code title="post /v1/blob/{key}">client.blobs.<a href="./src/resources/blobs.ts">store</a>(key) -> void</code>

# Users

Types:

- <code><a href="./src/resources/users/users.ts">UserRetrieveResponse</a></code>

Methods:

- <code title="get /v1/users/{userid}">client.users.<a href="./src/resources/users/users.ts">retrieve</a>(userid) -> UserRetrieveResponse</code>

## Vals

Methods:

- <code title="get /v1/users/{userid}/vals">client.users.vals.<a href="./src/resources/users/vals.ts">list</a>(userid, { ...params }) -> void</code>

# Sqlite

Methods:

- <code title="post /v1/sqlite/batch">client.sqlite.<a href="./src/resources/sqlite.ts">batch</a>({ ...params }) -> void</code>
- <code title="post /v1/sqlite/execute">client.sqlite.<a href="./src/resources/sqlite.ts">execute</a>({ ...params }) -> void</code>

# Evals

Types:

- <code><a href="./src/resources/evals.ts">EvalRunCodeResponse</a></code>

Methods:

- <code title="get /v1/eval/{code}">client.evals.<a href="./src/resources/evals.ts">runCode</a>(code, { ...params }) -> EvalRunCodeResponse | null</code>

# Vals

Methods:

- <code title="post /v1/vals/">client.vals.<a href="./src/resources/vals/vals.ts">create</a>({ ...params }) -> void</code>
- <code title="get /v1/vals/{val_id}">client.vals.<a href="./src/resources/vals/vals.ts">retrieve</a>(valId) -> void</code>
- <code title="put /v1/vals/{val_id}">client.vals.<a href="./src/resources/vals/vals.ts">update</a>(valId, { ...params }) -> void</code>
- <code title="delete /v1/vals/{val_id}">client.vals.<a href="./src/resources/vals/vals.ts">delete</a>(valId) -> void</code>
- <code title="put /v1/vals/">client.vals.<a href="./src/resources/vals/vals.ts">createOrUpdate</a>({ ...params }) -> void</code>
- <code title="post /v1/run/{valname}">client.vals.<a href="./src/resources/vals/vals.ts">run</a>(valname, { ...params }) -> void</code>

## Versions

Methods:

- <code title="post /v1/vals/{val_id}/versions">client.vals.versions.<a href="./src/resources/vals/versions.ts">create</a>(valId, { ...params }) -> void</code>
- <code title="get /v1/vals/{val_id}/versions/{version}">client.vals.versions.<a href="./src/resources/vals/versions.ts">retrieve</a>(valId, version, { ...params }) -> void</code>
- <code title="get /v1/vals/{val_id}/versions">client.vals.versions.<a href="./src/resources/vals/versions.ts">list</a>(valId, { ...params }) -> void</code>
- <code title="delete /v1/vals/{val_id}/versions/{version}">client.vals.versions.<a href="./src/resources/vals/versions.ts">delete</a>(valId, version) -> void</code>

# Emails

Types:

- <code><a href="./src/resources/emails.ts">EmailSendResponse</a></code>

Methods:

- <code title="post /v1/email">client.emails.<a href="./src/resources/emails.ts">send</a>({ ...params }) -> EmailSendResponse</code>
