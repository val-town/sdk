# Shared

Types:

- <code><a href="./src/resources/shared.ts">BasicVal</a></code>
- <code><a href="./src/resources/shared.ts">ExtendedVal</a></code>
- <code><a href="./src/resources/shared.ts">PaginationLinks</a></code>
- <code><a href="./src/resources/shared.ts">ResultSet</a></code>
- <code><a href="./src/resources/shared.ts">User</a></code>

# Search

## Vals

Methods:

- <code title="get /v1/search/vals">client.search.vals.<a href="./src/resources/search/vals.ts">list</a>({ ...params }) -> BasicValsPageCursorURL</code>

# Alias

## Username

Methods:

- <code title="get /v1/alias/{username}">client.alias.username.<a href="./src/resources/alias/username/username.ts">retrieve</a>(username) -> User</code>

### ValName

Types:

- <code><a href="./src/resources/alias/username/val-name.ts">ValNameRetrieveResponse</a></code>

Methods:

- <code title="get /v1/alias/{username}/{val_name}">client.alias.username.valName.<a href="./src/resources/alias/username/val-name.ts">retrieve</a>(username, valName) -> ValNameRetrieveResponse</code>

# Me

## Profile

Types:

- <code><a href="./src/resources/me/profile.ts">ProfileRetrieveResponse</a></code>

Methods:

- <code title="get /v1/me">client.me.profile.<a href="./src/resources/me/profile.ts">retrieve</a>() -> ProfileRetrieveResponse</code>

## Likes

Methods:

- <code title="get /v1/me/likes">client.me.likes.<a href="./src/resources/me/likes.ts">list</a>({ ...params }) -> BasicValsPageCursorURL</code>

## Comments

Types:

- <code><a href="./src/resources/me/comments.ts">CommentListResponse</a></code>

Methods:

- <code title="get /v1/me/comments">client.me.comments.<a href="./src/resources/me/comments.ts">list</a>({ ...params }) -> CommentListResponsesPageCursorURL</code>

## References

Types:

- <code><a href="./src/resources/me/references.ts">ReferenceListResponse</a></code>

Methods:

- <code title="get /v1/me/references">client.me.references.<a href="./src/resources/me/references.ts">list</a>({ ...params }) -> ReferenceListResponsesPageCursorURL</code>

# Blobs

Types:

- <code><a href="./src/resources/blobs.ts">BlobListResponse</a></code>

Methods:

- <code title="get /v1/blob">client.blobs.<a href="./src/resources/blobs.ts">list</a>({ ...params }) -> BlobListResponse</code>
- <code title="delete /v1/blob/{key}">client.blobs.<a href="./src/resources/blobs.ts">delete</a>(key) -> void</code>
- <code title="get /v1/blob/{key}">client.blobs.<a href="./src/resources/blobs.ts">get</a>(key) -> Response</code>
- <code title="post /v1/blob/{key}">client.blobs.<a href="./src/resources/blobs.ts">store</a>(key, { ...params }) -> void</code>

# Users

Methods:

- <code title="get /v1/users/{user_id}">client.users.<a href="./src/resources/users/users.ts">retrieve</a>(userId) -> User</code>

## Vals

Methods:

- <code title="get /v1/users/{user_id}/vals">client.users.vals.<a href="./src/resources/users/vals.ts">list</a>(userId, { ...params }) -> BasicValsPageCursorURL</code>

# Sqlite

Types:

- <code><a href="./src/resources/sqlite.ts">SqliteBatchResponse</a></code>

Methods:

- <code title="post /v1/sqlite/batch">client.sqlite.<a href="./src/resources/sqlite.ts">batch</a>({ ...params }) -> SqliteBatchResponse</code>
- <code title="post /v1/sqlite/execute">client.sqlite.<a href="./src/resources/sqlite.ts">execute</a>({ ...params }) -> ResultSet</code>

# Evals

Types:

- <code><a href="./src/resources/evals.ts">EvalRunCodeResponse</a></code>

Methods:

- <code title="get /v1/eval/{code}">client.evals.<a href="./src/resources/evals.ts">runCode</a>(code, { ...params }) -> EvalRunCodeResponse | null</code>

# Vals

Types:

- <code><a href="./src/resources/vals/vals.ts">ValRunAnonymousResponse</a></code>

Methods:

- <code title="post /v1/vals">client.vals.<a href="./src/resources/vals/vals.ts">create</a>({ ...params }) -> ExtendedVal</code>
- <code title="get /v1/vals/{val_id}">client.vals.<a href="./src/resources/vals/vals.ts">retrieve</a>(valId) -> ExtendedVal</code>
- <code title="put /v1/vals/{val_id}">client.vals.<a href="./src/resources/vals/vals.ts">update</a>(valId, { ...params }) -> void</code>
- <code title="delete /v1/vals/{val_id}">client.vals.<a href="./src/resources/vals/vals.ts">delete</a>(valId) -> void</code>
- <code title="put /v1/vals">client.vals.<a href="./src/resources/vals/vals.ts">createOrUpdate</a>({ ...params }) -> void</code>
- <code title="post /v1/run/{valname}">client.vals.<a href="./src/resources/vals/vals.ts">run</a>(valname, { ...params }) -> void</code>
- <code title="post /v1/eval">client.vals.<a href="./src/resources/vals/vals.ts">runAnonymous</a>({ ...params }) -> ValRunAnonymousResponse | null</code>
- <code title="get /v1/run/{valname}">client.vals.<a href="./src/resources/vals/vals.ts">runGet</a>(valname, { ...params }) -> void</code>

## Versions

Types:

- <code><a href="./src/resources/vals/versions.ts">VersionListResponse</a></code>

Methods:

- <code title="post /v1/vals/{val_id}/versions">client.vals.versions.<a href="./src/resources/vals/versions.ts">create</a>(valId, { ...params }) -> ExtendedVal</code>
- <code title="get /v1/vals/{val_id}/versions/{version}">client.vals.versions.<a href="./src/resources/vals/versions.ts">retrieve</a>(valId, version, { ...params }) -> ExtendedVal</code>
- <code title="get /v1/vals/{val_id}/versions">client.vals.versions.<a href="./src/resources/vals/versions.ts">list</a>(valId, { ...params }) -> VersionListResponsesPageCursorURL</code>
- <code title="delete /v1/vals/{val_id}/versions/{version}">client.vals.versions.<a href="./src/resources/vals/versions.ts">delete</a>(valId, version) -> void</code>

# Emails

Types:

- <code><a href="./src/resources/emails.ts">EmailSendResponse</a></code>

Methods:

- <code title="post /v1/email">client.emails.<a href="./src/resources/emails.ts">send</a>({ ...params }) -> EmailSendResponse</code>
