import React from 'react';

  export const DisplayFormikState = props => (
    <div style={{ margin: '1rem 0' }} >
      <h3 style={{ fontFamily: 'monospace' }} />
      <pre
        style={{
          background: '#f6f8fa',
          fontSize: '.65rem',
          padding: '.5rem'


        }}
        >
            <strong>props</strong> = {''}
            {JSON.stringify(props, null, 2)}
        </pre>
      </div>
  );

  export const MoreResources = props => (
    <div>
      <hr style={{ margin: '3rem 0'}} />
      <h3>More Examples</h3>
      <ul>
        <li>
          <a
            href="#"
            target="blank"
            rel="noopener"
          >
            Synchronous Validation
          </a>

        </li>
        <li>
        <a
            href="#"
            target="blank"
            rel="noopener"
          >
            Building your own custom inputs
       </a>  
      </li>
      <li>
      <a
            href="#"
            target="blank"
            rel="noopener"
          >
            3rd-party input components: React-Select
      </a>  
      </li>
      <li>
      <a
            href="#"
            target="blank"
            rel="noopener"
          >
            3rd-party input components: Draft.js
      </a>  
      </li>
      <li>
      <a
            href="#"
            target="blank"
            rel="noopener"
          >
            Accessing Lifecycle Methods (restting a form externally)
      </a>  
      </li>
      </ul>

      <h3 style={{ marginTop: '1rem'}}>
        Social Media
      </h3>
      <ul>
      <li>
      <a
            href="https://github.com/WrissyCorleone/WrissyCorleone"
            target="blank"
            rel="noopener"
          >
            GitHub Repo
      </a>  
      </li>
      
      <li>
      <a
            href="https://twitter.com/WrissyCorleone"
            target="blank"
            rel="noopener"
          >
            Twitter @WrissyCorleone
      </a>  
      </li>

      </ul>
      <footer style={{ margin: '1.75rem'}}> Powered by <a href="https://Formik.org" target="blank" rel="noopener"><h3 style={{marginTop: '-0rem'}}>Formik</h3></a></footer>
    </div>
  );