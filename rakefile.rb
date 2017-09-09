task :build do
  sh 'tsc'
  sh 'npx rollup build/index.js --format cjs --output index.js'
end

task :test do
  sh 'jest'
end
