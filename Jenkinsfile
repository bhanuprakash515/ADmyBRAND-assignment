pipeline {
    agent any

    tools {
        nodejs "node18"
    }

    stages {
        stage('CheckOut Code') {
            steps{
                git branch: 'main',
                url: 'https://github.com/bhanuprakash515/ADmyBRAND-assignment.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage ('Check Node and npm Version') {
            steps {
                sh '''
                node -v
                npm -v
                '''
            }
        }

        stage('Vunerrability Check ') {
            steps {
                sh '''
                echo "🔍 Running npm audit (high & critical only)"
                npm audit --audit-level=high
                '''
            }
        }

        stage('Build Application') {
            steps {
                sh 'npm run build'
            }
        }

    }
    post {
        success {
            echo ' Build pipeline completed successfully'
        }
        failure {
            echo ' Build pipeline failed'
        }
    }

}
