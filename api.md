# Shared

Types:

- <code><a href="./src/resources/shared.ts">BasicVal</a></code>
- <code><a href="./src/resources/shared.ts">ExtendedVal</a></code>
- <code><a href="./src/resources/shared.ts">PaginationLinks</a></code>
- <code><a href="./src/resources/shared.ts">ResultSet</a></code>
- <code><a href="./src/resources/shared.ts">User</a></code>
- <code><a href="./src/resources/shared.ts">Val</a></code>

# Search

## Vals

Methods:

- <code title="get /v1/search/vals">client.search.vals.<a href="./src/resources/search/vals.ts">list</a>({ ...params }) -> BasicValsPageCursorURL</code>

# Alias

## Username

Methods:

- <code title="get /v1/alias/{username}">client.alias.username.<a href="./src/resources/alias/username/username.ts">retrieve</a>(username) -> User</code>

### ValName

Methods:

- <code title="get /v2/alias/vals/{username}/{val_name}">client.alias.username.valName.<a href="./src/resources/alias/username/val-name.ts">retrieve</a>(username, valName) -> Val</code>

# Me

## Profile

Types:

- <code><a href="./src/resources/me/profile.ts">ProfileRetrieveResponse</a></code>

Methods:

- <code title="get /v1/me">client.me.profile.<a href="./src/resources/me/profile.ts">retrieve</a>() -> ProfileRetrieveResponse</code>

## Vals

Methods:

- <code title="get /v2/me/vals">client.me.vals.<a href="./src/resources/me/vals.ts">list</a>({ ...params }) -> ValsPageCursorURL</code>

# Orgs

Types:

- <code><a href="./src/resources/orgs.ts">OrgListResponse</a></code>

Methods:

- <code title="get /v2/orgs">client.orgs.<a href="./src/resources/orgs.ts">list</a>({ ...params }) -> OrgListResponsesPageCursorURL</code>

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

- <code title="get /v1/users/{user_id}">client.users.<a href="./src/resources/users.ts">retrieve</a>(userId) -> User</code>

# Sqlite

Types:

- <code><a href="./src/resources/sqlite.ts">SqliteBatchResponse</a></code>

Methods:

- <code title="post /v1/sqlite/batch">client.sqlite.<a href="./src/resources/sqlite.ts">batch</a>({ ...params }) -> SqliteBatchResponse</code>
- <code title="post /v1/sqlite/execute">client.sqlite.<a href="./src/resources/sqlite.ts">execute</a>({ ...params }) -> ResultSet</code>

# Telemetry

## Traces

Types:

- <code><a href="./src/resources/telemetry/traces.ts">TraceListResponse</a></code>

Methods:

- <code title="get /v1/telemetry/traces">client.telemetry.traces.<a href="./src/resources/telemetry/traces.ts">list</a>({ ...params }) -> TraceListResponse</code>

## Logs

Types:

- <code><a href="./src/resources/telemetry/logs.ts">LogListResponse</a></code>

Methods:

- <code title="get /v1/telemetry/logs">client.telemetry.logs.<a href="./src/resources/telemetry/logs.ts">list</a>({ ...params }) -> LogListResponse</code>

# Vals

Methods:

- <code title="post /v2/vals">client.vals.<a href="./src/resources/vals/vals.ts">create</a>({ ...params }) -> Val</code>
- <code title="get /v2/vals/{val_id}">client.vals.<a href="./src/resources/vals/vals.ts">retrieve</a>(valId) -> Val</code>
- <code title="get /v2/vals">client.vals.<a href="./src/resources/vals/vals.ts">list</a>({ ...params }) -> ValsCursor</code>
- <code title="delete /v2/vals/{val_id}">client.vals.<a href="./src/resources/vals/vals.ts">delete</a>(valId) -> void</code>

## Branches

Types:

- <code><a href="./src/resources/vals/branches.ts">BranchCreateResponse</a></code>
- <code><a href="./src/resources/vals/branches.ts">BranchRetrieveResponse</a></code>
- <code><a href="./src/resources/vals/branches.ts">BranchListResponse</a></code>

Methods:

- <code title="post /v2/vals/{val_id}/branches">client.vals.branches.<a href="./src/resources/vals/branches.ts">create</a>(valId, { ...params }) -> BranchCreateResponse</code>
- <code title="get /v2/vals/{val_id}/branches/{branch_id}">client.vals.branches.<a href="./src/resources/vals/branches.ts">retrieve</a>(valId, branchId) -> BranchRetrieveResponse</code>
- <code title="get /v2/vals/{val_id}/branches">client.vals.branches.<a href="./src/resources/vals/branches.ts">list</a>(valId, { ...params }) -> BranchListResponsesPageCursorURL</code>
- <code title="delete /v2/vals/{val_id}/branches/{branch_id}">client.vals.branches.<a href="./src/resources/vals/branches.ts">delete</a>(valId, branchId) -> void</code>

## Files

Types:

- <code><a href="./src/resources/vals/files.ts">FileCreateResponse</a></code>
- <code><a href="./src/resources/vals/files.ts">FileRetrieveResponse</a></code>
- <code><a href="./src/resources/vals/files.ts">FileUpdateResponse</a></code>

Methods:

- <code title="post /v2/vals/{val_id}/files">client.vals.files.<a href="./src/resources/vals/files.ts">create</a>(valId, { ...params }) -> FileCreateResponse</code>
- <code title="get /v2/vals/{val_id}/files">client.vals.files.<a href="./src/resources/vals/files.ts">retrieve</a>(valId, { ...params }) -> FileRetrieveResponsesPageCursorURL</code>
- <code title="put /v2/vals/{val_id}/files">client.vals.files.<a href="./src/resources/vals/files.ts">update</a>(valId, { ...params }) -> FileUpdateResponse</code>
- <code title="delete /v2/vals/{val_id}/files">client.vals.files.<a href="./src/resources/vals/files.ts">delete</a>(valId, { ...params }) -> void</code>
- <code title="get /v2/vals/{val_id}/files/content">client.vals.files.<a href="./src/resources/vals/files.ts">getContent</a>(valId, { ...params }) -> Response</code>

# Files

Types:

- <code><a href="./src/resources/files.ts">FileRetrieveResponse</a></code>

Methods:

- <code title="get /v2/files/{file_id}">client.files.<a href="./src/resources/files.ts">retrieve</a>(fileId) -> FileRetrieveResponse</code>

# Emails

Types:

- <code><a href="./src/resources/emails.ts">EmailSendResponse</a></code>

Methods:

- <code title="post /v1/email">client.emails.<a href="./src/resources/emails.ts">send</a>({ ...params }) -> EmailSendResponse</code>
